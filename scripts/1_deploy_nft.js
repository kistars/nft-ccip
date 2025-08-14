async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy("Spaceship", "SSP");
  await myToken.waitForDeployment();

  console.log("MyToken deployed to:", myToken.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});