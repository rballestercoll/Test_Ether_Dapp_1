// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract MoodDiary{
  // This is the contract's body, here you'll specify the logic for this contract.

string mood;

//create a function that writes a mood to the smart contract
function setMood(string memory _mood) public{
    mood = _mood;
}

//create a function that reads the mood from the smart contract
function getMood() public view returns(string memory){
    return mood;
}

}


// Deployed Contract Address
    //0xC899a1e259E3129133b79a248FCca641C4B9D242

// Contract ABI
    /*
    [
	{
		"inputs": [],
		"name": "getMood",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_mood",
				"type": "string"
			}
		],
		"name": "setMood",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
*/