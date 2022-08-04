require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
};

// 01 Mumbai:  0x8870A775491580Dca0cf540fD2236b23d1655003 x ERROR
// 02 Mumbai:  0xD2c21633a243169A6b6E2688d9A9fC1A10809cD5
// 03 Mainnet: 0xEC800E57D8B258D69CCaBb0D807dA98c89E6C76a