const hre = require("hardhat");

async function main() {
  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();
   upload.getDeployedCode
  //await upload.deployed();
    
  address=await upload.getAddress();
  console.log("Library deployed to:",address,upload.getDeployedCode());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});