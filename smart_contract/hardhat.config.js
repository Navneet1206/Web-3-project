require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/WUoIYCJ3m34TsMqRwc4-H2L4rDIvyw5X',
      accounts: ['c5b19b2fd436dd50af6baf040b14928323d83ba664b26e909691271e4a417912'],
    },
  },
};