const { ethers } = require("hardhat");
const { network, run } = require("hardhat");

async function verify(address, constructorArguments) {
  console.log(`verify  ${address} with arguments ${constructorArguments.join(',')}`)
  await run("verify:verify", {
    address,
    constructorArguments
  })
}
let nftContract = "0xe4F88f1502F109c679a43FbFf2caD89ab41f0BaF";
let stable = "0x14edeb2bc9970e0da461c9f85ad47b3d96363c1a";
let wallet = "0x34136d58CB3ED22EB4844B481DDD5336886b3cec";

async function main() {

  const StableMinting_ = await ethers.getContractFactory("Marketplace");
 
  const StableMinting = await StableMinting_.deploy( nftContract, stable, wallet );
  await StableMinting.deployed();

  console.log(`StableMinting deployed to ${StableMinting.address}`);

  await new Promise(resolve => setTimeout(resolve, 10000));
  verify(StableMinting.address, [nftContract, stable, wallet ]);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
