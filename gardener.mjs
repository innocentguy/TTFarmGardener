import ethers from "ethers";
import farmAbi from "./Farm.abi.mjs";
import dotenv from "dotenv";
import cron from "node-cron";

dotenv.config();

// Configurations
const rpcUrl = process.env.RPC;
const farmContractAddress = process.env.FARM_CONTRACT;
const privateKey = process.env.PRIVATE_KEY;
const petId = process.env.PET_ID;

// Ethers setting
const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
const signer = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(farmContractAddress, farmAbi, signer);

// Filter setting
const successTopic = contract.interface.getEventTopic("GetInterestByIdSucc");
const failedTopic = contract.interface.getEventTopic("GetInterestByIdFailed");

const filter = {
  address: farmContractAddress,
  topics: [
    [successTopic, failedTopic],
    ethers.utils.hexZeroPad(signer.address, 32),
  ],
  fromBlock: 65433969,
};

// Main logic
async function main() {
  await contract.getInterestById(petId);
  setTimeout(async () => {
    const logs = await provider.getLogs(filter);
    const log = logs[logs.length - 1];
    console.log(`Block number: ${log.blockNumber}`);
    console.log(`Tx: ${log.transactionHash}`);
    if (log.topics[0].toLowerCase() === successTopic.toLowerCase()) {
      console.log("Successfully Collect TT");
    } else {
      console.log("Failed Collect TT");
    }
  }, 2000);
}

console.log("Initialize the worker, it will activate every 00:00");
cron.schedule("0 * * * *", async () => {
  console.log(`Animal Id: ${petId}`);
  console.log(`[${Date.now()}] Start collecting TT`);
  await main();
  console.log(`[${Date.now()}] Finish collecting TT`);
});
