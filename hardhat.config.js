/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-ethers");
require("dotenv").config({ path: __dirname + "/.env" });

const { REACT_APP_ALCHEMY_KEY, REACT_APP_BLOCKCHAIN_PRIVATE_KEY } = process.env;

// console.log("REACT_APP_ALCHEMY_KEY: ", REACT_APP_ALCHEMY_KEY);
// console.log(
//     "REACT_APP_BLOCKCHAIN_PRIVATE_KEY: ",
//     REACT_APP_BLOCKCHAIN_PRIVATE_KEY
// );

module.exports = {
    solidity: "0.8.0",
    defaultNetwork: "rinkeby",
    networks: {
        hardhat: {},
        rinkeby: {
            url: REACT_APP_ALCHEMY_KEY,
            accounts: [`0x${REACT_APP_BLOCKCHAIN_PRIVATE_KEY}`],
        },
    },
};
