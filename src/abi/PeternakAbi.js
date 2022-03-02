const PeternakAbi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "peternakid",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "nama",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "kelurahan",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "created",
          "type": "string"
        }
      ],
      "name": "StoreAddFarmer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "arr",
      "outputs": [
        {
          "internalType": "address",
          "name": "walletAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "peternakid",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "nama",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "kelurahan",
          "type": "string"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ],
          "internalType": "struct AddPeternak.Json",
          "name": "json",
          "type": "tuple"
        },
        {
          "internalType": "string",
          "name": "created",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "init",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllfarmer",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "walletAddress",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "peternakid",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "nama",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "kelurahan",
              "type": "string"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "json",
                  "type": "string"
                }
              ],
              "internalType": "struct AddPeternak.Json",
              "name": "json",
              "type": "tuple"
            },
            {
              "internalType": "string",
              "name": "created",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "init",
              "type": "bool"
            }
          ],
          "internalType": "struct AddPeternak.AddFarmer[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "peternakid",
          "type": "string"
        }
      ],
      "name": "getDataById",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "walletAddress",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "peternakid",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "nama",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "kelurahan",
              "type": "string"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "json",
                  "type": "string"
                }
              ],
              "internalType": "struct AddPeternak.Json",
              "name": "json",
              "type": "tuple"
            },
            {
              "internalType": "string",
              "name": "created",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "init",
              "type": "bool"
            }
          ],
          "internalType": "struct AddPeternak.AddFarmer",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "kelurahan",
          "type": "string"
        }
      ],
      "name": "getDataByKelurahan",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "walletAddress",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "peternakid",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "nama",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "kelurahan",
              "type": "string"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "json",
                  "type": "string"
                }
              ],
              "internalType": "struct AddPeternak.Json",
              "name": "json",
              "type": "tuple"
            },
            {
              "internalType": "string",
              "name": "created",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "init",
              "type": "bool"
            }
          ],
          "internalType": "struct AddPeternak.AddFarmer[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "nama",
          "type": "string"
        }
      ],
      "name": "getDataByNama",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "walletAddress",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "peternakid",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "nama",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "kelurahan",
              "type": "string"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "json",
                  "type": "string"
                }
              ],
              "internalType": "struct AddPeternak.Json",
              "name": "json",
              "type": "tuple"
            },
            {
              "internalType": "string",
              "name": "created",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "init",
              "type": "bool"
            }
          ],
          "internalType": "struct AddPeternak.AddFarmer[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

module.exports = PeternakAbi;