const QuantumEye = artifacts.require("BoxingBoyz"); //BoxingBoyz.sol

module.exports = function (deployer) {
  deployer.deploy(
    QuantumEye,
    "ipfs://QmZA9D1BKEtr9rA3DRMf145uRPoH87yK31yiP6MYikGunp/",
    11111
  );
};
