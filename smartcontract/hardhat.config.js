require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const MATIC_RPC_URL = process.env.MATIC_RPC_URL || "https://rinkeby.infura.io/v3/";
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {},
        polygon: {
            url: MATIC_RPC_URL,
            accounts: [PRIVATE_KEY],
            
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
    },
    solidity: "0.8.9",
};
