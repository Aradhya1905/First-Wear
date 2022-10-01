const { ethers, network } = require("hardhat");

async function main() {
	const FirstWear = await ethers.getContractFactory('FirstWear');
	const firstWear = await FirstWear.deploy();
	await firstWear.deployed;

	console.log('FirstWear contract deployed to :', firstWear.address);
	console.log('network:',network.name);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

