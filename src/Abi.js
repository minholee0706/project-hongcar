const Abi =[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "kakaoUserId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "carname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "carcost",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "userText",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isDeleted",
				"type": "bool"
			}
		],
		"name": "addInfo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "userId",
				"type": "uint256"
			}
		],
		"name": "AddInfo",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "userId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isDeleted",
				"type": "bool"
			}
		],
		"name": "deleteInfo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "userId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isDeleted",
				"type": "bool"
			}
		],
		"name": "DeleteInfo",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "getMyInfo",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "useraddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "kakaoUserId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "carName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "carcost",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "username",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "userText",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isDeleted",
						"type": "bool"
					}
				],
				"internalType": "struct userInfo.Info[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
export default Abi;