async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const NFTPoolLockAndRelease = await ethers.getContractFactory("NFTPoolLockAndRelease");
  const nftPoolLockAndRelease = await NFTPoolLockAndRelease.deploy();
  await nftPoolLockAndRelease.waitForDeployment();

  console.log("NFTPoolLockAndRelease deployed to:", nftPoolLockAndRelease.target);
}