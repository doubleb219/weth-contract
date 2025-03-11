import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.20',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  etherscan: {
    apiKey: {
      sonicTestnet: "9DXFXX257MVXK9HGBF4S1WKHZMR8CRSXGM",
    },
    customChains: [
      {
        network: "sonic",
        chainId: 146,
        urls: {
          apiURL: "https://api.sonicscan.org/api",
          browserURL: "https://sonicscan.org"
        }
      },
      {
        network: "sonicTestnet",
        chainId: 57054,
        urls: {
          apiURL: "https://api-testnet.sonicscan.org/api",
          browserURL: "https://testnet.sonicscan.org"
        }
      }
    ]
  },
  networks: {
    sonicTestnet: {
      url: 'https://rpc.blaze.soniclabs.com',
      chainId: 57054,
      accounts: ["c1c4a1b8e927c6fae4fb1c2cdcdff3345a32180affef29f9ceea8d114dacdf64"]
    }
  },
};

export default config;
