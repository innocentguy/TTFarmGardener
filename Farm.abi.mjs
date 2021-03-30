export default [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "animalId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "claimCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "unit",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "interval",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "apr",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endDate",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "usedQuota",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "maxQuota",
            type: "int256",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct Farm.Animal",
        name: "addedAnimal",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "AddAnimalFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "animalId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "claimCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "unit",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "interval",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "apr",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endDate",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "usedQuota",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "maxQuota",
            type: "int256",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct Farm.Animal",
        name: "addedAnimal",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "AddAnimalSucc",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "animalId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "claimCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "unit",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "interval",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "apr",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endDate",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "usedQuota",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "maxQuota",
            type: "int256",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct Farm.Animal",
        name: "editedAnimal",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "EditAnimalFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "animalId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "claimCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "unit",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "interval",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "apr",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endDate",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "usedQuota",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "maxQuota",
            type: "int256",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct Farm.Animal",
        name: "editedAnimal",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "EditAnimalSucc",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "petId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "GetInterestByIdFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "petId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "claimCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interval",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "apr",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collectionCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "farmProduceValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastCollectionTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyTime",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Farm.Pet",
        name: "animal",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "GetInterestByIdSucc",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "petId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "PurchaseAnimalFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "petId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "petId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "claimCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interval",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "apr",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collectionCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "farmProduceValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastCollectionTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyTime",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Farm.Pet",
        name: "pet",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "usedQuota",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "PurchaseAnimalSucc",
    type: "event",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "animals",
    outputs: [
      {
        internalType: "uint256",
        name: "animalId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "category",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "claimCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "unit",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "interval",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "apr",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endDate",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "usedQuota",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "maxQuota",
        type: "int256",
      },
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userPets",
    outputs: [
      {
        internalType: "uint256",
        name: "petId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "category",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "claimCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interval",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "apr",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collectionCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "farmProduceValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastCollectionTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "buyTime",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "erc20ContractAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "quotationAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "moneyReceiverAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "changeOwner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "setMoneyReceiver",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "addOperator",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "removeOperator",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "deployer",
        type: "address",
      },
    ],
    name: "changeDeployer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "erc20ContractAddress",
        type: "address",
      },
    ],
    name: "setUsdtContract",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "quotationAddress",
        type: "address",
      },
    ],
    name: "setQuotationContract",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getUsdtContractAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getQuotationContractAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes",
        name: "_encodedAnimal",
        type: "bytes",
      },
    ],
    name: "addAnimal",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes",
        name: "_encodedAnimalProps",
        type: "bytes",
      },
    ],
    name: "editAnimal",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "string[]",
        name: "props",
        type: "string[]",
      },
      {
        internalType: "bytes",
        name: "_encodedAnimalProps",
        type: "bytes",
      },
    ],
    name: "editAnimalByProps",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getAnimalById",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "animalId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "claimCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "unit",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "interval",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "apr",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endDate",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "usedQuota",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "maxQuota",
            type: "int256",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        internalType: "struct Farm.Animal",
        name: "",
        type: "tuple",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "_pId",
        type: "uint256",
      },
    ],
    name: "getUserPetsById",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "petId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "claimCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interval",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "apr",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collectionCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "farmProduceValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastCollectionTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyTime",
            type: "uint256",
          },
        ],
        internalType: "struct Farm.Pet",
        name: "",
        type: "tuple",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_pId",
        type: "uint256",
      },
    ],
    name: "getSpecificUserPetsById",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "petId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "claimCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interval",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "apr",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collectionCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "farmProduceValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastCollectionTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyTime",
            type: "uint256",
          },
        ],
        internalType: "struct Farm.Pet",
        name: "",
        type: "tuple",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256[]",
        name: "animalIds",
        type: "uint256[]",
      },
    ],
    name: "getAnimalRemainingQuotaById",
    outputs: [
      {
        internalType: "int256[]",
        name: "",
        type: "int256[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "_animalId",
        type: "uint256",
      },
    ],
    name: "canPurchasePet",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "frontendPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "contractPrice",
        type: "uint256",
      },
    ],
    name: "isTTPriceValid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "sellPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ttPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "apr",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interval",
        type: "uint256",
      },
    ],
    name: "calcFarmTTamount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_petId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ttPrice",
        type: "uint256",
      },
    ],
    name: "purchaseAnimal",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_petId",
        type: "uint256",
      },
    ],
    name: "getInterestById",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
