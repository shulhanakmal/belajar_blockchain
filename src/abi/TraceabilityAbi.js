const TraceabilityAbi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "traceabilityid",
        type: "string",
      },
      {
        internalType: "string",
        name: "nokemas",
        type: "string",
      },
      {
        internalType: "string",
        name: "volumehasilkemasbotol",
        type: "string",
      },
      {
        internalType: "string",
        name: "areadistribusi",
        type: "string",
      },
      {
        internalType: "string",
        name: "tglselesaiprod",
        type: "string",
      },
      {
        internalType: "string",
        name: "tglkadaluarsa",
        type: "string",
      },
      {
        internalType: "string",
        name: "nokantungpanen",
        type: "string",
      },
      {
        internalType: "string",
        name: "nohalal",
        type: "string",
      },
      {
        internalType: "string",
        name: "nobpom",
        type: "string",
      },
      {
        internalType: "string",
        name: "json",
        type: "string",
      },
      {
        internalType: "string",
        name: "created",
        type: "string",
      },
    ],
    name: "StoreAddTraceability",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "arr",
    outputs: [
      {
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "traceabilityid",
        type: "string",
      },
      {
        internalType: "string",
        name: "nokemas",
        type: "string",
      },
      {
        internalType: "string",
        name: "volumehasilkemasbotol",
        type: "string",
      },
      {
        internalType: "string",
        name: "areadistribusi",
        type: "string",
      },
      {
        internalType: "string",
        name: "tglselesaiprod",
        type: "string",
      },
      {
        internalType: "string",
        name: "tglkadaluarsa",
        type: "string",
      },
      {
        internalType: "string",
        name: "nokantungpanen",
        type: "string",
      },
      {
        internalType: "string",
        name: "nohalal",
        type: "string",
      },
      {
        internalType: "string",
        name: "nobpom",
        type: "string",
      },
      {
        components: [
          {
            internalType: "string",
            name: "json",
            type: "string",
          },
        ],
        internalType: "struct AddTraceability.Json",
        name: "json",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "created",
        type: "string",
      },
      {
        internalType: "bool",
        name: "init",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAlltraceability",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "walletAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "traceabilityid",
            type: "string",
          },
          {
            internalType: "string",
            name: "nokemas",
            type: "string",
          },
          {
            internalType: "string",
            name: "volumehasilkemasbotol",
            type: "string",
          },
          {
            internalType: "string",
            name: "areadistribusi",
            type: "string",
          },
          {
            internalType: "string",
            name: "tglselesaiprod",
            type: "string",
          },
          {
            internalType: "string",
            name: "tglkadaluarsa",
            type: "string",
          },
          {
            internalType: "string",
            name: "nokantungpanen",
            type: "string",
          },
          {
            internalType: "string",
            name: "nohalal",
            type: "string",
          },
          {
            internalType: "string",
            name: "nobpom",
            type: "string",
          },
          {
            components: [
              {
                internalType: "string",
                name: "json",
                type: "string",
              },
            ],
            internalType: "struct AddTraceability.Json",
            name: "json",
            type: "tuple",
          },
          {
            internalType: "string",
            name: "created",
            type: "string",
          },
          {
            internalType: "bool",
            name: "init",
            type: "bool",
          },
        ],
        internalType: "struct AddTraceability.AddTraceability[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "traceabilityid",
        type: "string",
      },
    ],
    name: "getDataById",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "walletAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "traceabilityid",
            type: "string",
          },
          {
            internalType: "string",
            name: "nokemas",
            type: "string",
          },
          {
            internalType: "string",
            name: "volumehasilkemasbotol",
            type: "string",
          },
          {
            internalType: "string",
            name: "areadistribusi",
            type: "string",
          },
          {
            internalType: "string",
            name: "tglselesaiprod",
            type: "string",
          },
          {
            internalType: "string",
            name: "tglkadaluarsa",
            type: "string",
          },
          {
            internalType: "string",
            name: "nokantungpanen",
            type: "string",
          },
          {
            internalType: "string",
            name: "nohalal",
            type: "string",
          },
          {
            internalType: "string",
            name: "nobpom",
            type: "string",
          },
          {
            components: [
              {
                internalType: "string",
                name: "json",
                type: "string",
              },
            ],
            internalType: "struct AddTraceability.Json",
            name: "json",
            type: "tuple",
          },
          {
            internalType: "string",
            name: "created",
            type: "string",
          },
          {
            internalType: "bool",
            name: "init",
            type: "bool",
          },
        ],
        internalType: "struct AddTraceability.AddTraceability",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

module.exports = TraceabilityAbi;
