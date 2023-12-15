const networkConfig = {
    11155111: {
        name: "sepolia",
        ethUsdPriceFeed: "0x694aa1769357215de4fac081bf1f309adc325306",
    },
    137: {
        name: "polygon",
        ethUsdPriceFeed: "0xf9680d99d6c9589e2a93a78a04a279e509205945",
    },
}
const developmentChains = ["hardhat", "localhost"]
const DECIMALS = 8
const INITIAL_ANSWER = 20000000000

module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER,
}
