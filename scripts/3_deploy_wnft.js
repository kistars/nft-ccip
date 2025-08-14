async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const WrappedMyToken = await ethers.getContractFactory("WrappedMyToken");
  const wrappedMyToken = await WrappedMyToken.deploy("WrappedSpaceship", "WSSP");
  await wrappedMyToken.waitForDeployment();

  console.log("WrappedMyToken deployed to:", wrappedMyToken.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});