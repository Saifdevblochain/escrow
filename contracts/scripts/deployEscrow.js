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

  const escrow_main_ = await ethers.getContractFactory("escrow_main");
 
  const escrow_main = await escrow_main_.deploy( );
  await escrow_main.deployed();

  console.log(`escrow_main deployed to ${escrow_main.address}`);

  await new Promise(resolve => setTimeout(resolve, 10000));
  verify(escrow_main.address, [ ]);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
