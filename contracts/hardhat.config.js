require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    mumbai: {
      url: process.env.URL,
      accounts: [process.env.PRIVATE_KEY],
      allowUnlimitedContractSize: true,
    },
  },
  etherscan: {
    apiKey: 'PXZCMGW77S5KIKPBINADIDBFFNCFMYVP6R'
  },
};


// PXZCMGW77S5KIKPBINADIDBFFNCFMYVP6R  mumbaiScan-apikey
// AYBZ53EN445WNPFP2IZ85RXRPB4FH5XBP7  etherscan-apikey