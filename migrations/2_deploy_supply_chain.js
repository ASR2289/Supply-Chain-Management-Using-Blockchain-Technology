const SupplyChain = artifacts.require("MyContract");

module.exports = function(deployer) {
  deployer.deploy(SupplyChain);
};