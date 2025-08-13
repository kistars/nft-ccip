const { ethers } = require("hardhat");
const { expect } = require("chai");


describe("test MyToken", function () {
    const tokenName = "Spaceship";
    const tokenSymbol = "SSP";
    const tokenURI = "ipfs://12345"
    let myToken, owner, user;

    // beforeEach(async () => {
    //     [owner, user] = await ethers.getSigners();
    //     const MyToken = await ethers.getContractFactory("MyToken", owner);
    //     myToken = await MyToken.deploy(tokenName, tokenSymbol);
    //     await myToken.waitForDeployment();
    //     console.log("myToken address =", myToken.target);
    // });

    it("test init", async function () {
        expect(await myToken.name()).to.eq(tokenName);
        expect(await myToken.symbol()).to.eq(tokenSymbol);
    });

    it.only("test tokenURI", async function () {
        await myToken.mint(user.address, tokenURI);

        expect(await myToken.tokenURI(0)).to.eq(tokenURI);
        expect(await myToken.ownerOf(0)).to.eq(user.address);
    });

});