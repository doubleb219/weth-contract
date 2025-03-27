const { ethers } = require("hardhat");

const hre = require("hardhat");

async function main() {
  const initialSupply = "10000000000000000000000000"; // 1,000,000 WETH
  const WrappedEhter = await ethers.getContractFactory("WS");
  const weth = await WrappedEhter.deploy(initialSupply);

  // await weth.deployed();
  console.log("Wrapped Sonic deployed to:", weth.address);

  // await hre.run("verify:verify", {
  //     address: weth.address,
  //     constructorArguments: [initialSupply],
  // });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});