const { ethers } = require("hardhat");
const { network, run } = require("hardhat");

async function verify(address, constructorArguments) {
  console.log(`verify  ${address} with arguments ${constructorArguments.join(',')}`)
  await run("verify:verify", {
    address,
    constructorArguments
  })
}

async function main() {

  const StableMinting_ = await ethers.getContractFactory("nftStable");
  const StableMinting = await StableMinting_.deploy( );
  await StableMinting.deployed();

  console.log(`StableMinting deployed to ${StableMinting.address}`);

  await new Promise(resolve => setTimeout(resolve, 10000));
  verify(StableMinting.address, []);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
