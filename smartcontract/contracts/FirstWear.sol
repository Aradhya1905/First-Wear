// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract FirstWear {
	address payable owner;
	uint256 amount = 0.2 ether;
	constructor(){
		owner  = payable(msg.sender);
		
	}
	function pay() public payable{
		require(msg.value >= amount,'pay 0.2eth to buy shoe');		

	}

    function withdraw() public {
        address(this).balance;
        require(owner.send(address(this).balance));
    }
}


// contract deployed to address 0x93B55Db5c7666A92C10a64D4291E87df21BcDB41
