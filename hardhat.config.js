require("@chainlink/env-enc").config()
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("./task")
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity:{
    compilers: [
      {
        version: "0.8.20"
      },
      {
        version: "0.8.19"
      }
    ]
  },
  namedAccounts: {
    firstAccount: {
      default: 0
    }
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY_ONE, process.env.PRIVATE_KEY_TWO],
      chainId: 11155111,
      blockConfirmations: 6,
      companionNetworks: {
        destChain: "arbitrum-sepolia"
      }
    },
    amoy: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY_ONE, process.env.PRIVATE_KEY_TWO],
      chainId: 80002,
      blockConfirmations: 6,
      companionNetworks: {
        destChain: "sepolia"
      }
    }
  }
};
