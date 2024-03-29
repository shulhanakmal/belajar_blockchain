// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Peternak = await hre.ethers.getContractFactory("AddPeternak");
  const peternak = await Peternak.deploy();
  const txHash = peternak.deployTransaction.hash;
  const txReceipt = await ethers.provider.waitForTransaction(txHash);

  await peternak.deployed();

  console.log("Peternak deployed to address:",  txReceipt.contractAddress);

  const Traceability = await hre.ethers.getContractFactory("AddTraceability");
  const traceability = await Traceability.deploy();
  const txHash2 = traceability.deployTransaction.hash;
  const txReceipt2 = await ethers.provider.waitForTransaction(txHash2);

  await traceability.deployed();

  console.log("Traceability deployed to address:",  txReceipt2.contractAddress);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
