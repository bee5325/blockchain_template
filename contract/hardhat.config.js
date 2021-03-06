require("@nomiclabs/hardhat-waffle");
require("./tasks/faucet");
require("./tasks/tsetup");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.1",
    settings: {
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
  networks: {
    mainnet: {
      url: process.env.ALCHEMY_MAINNET_API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    rinkeby: {
      url: process.env.ALCHEMY_RINKEBY_API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    arbRinkeby: {
      url: process.env.ALCHEMY_ARBRINKEBY_API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    arbitrum: {
      url: process.env.ALCHEMY_ARBITRUM_API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      arbitrumOne: process.env.ARBISCAN_API_KEY,
    },
  },
};
