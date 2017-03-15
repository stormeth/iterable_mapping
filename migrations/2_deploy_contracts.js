var IterableMapping = artifacts.require("./IterableMapping.sol");
var User = artifacts.require("./User.sol");

module.exports = function(deployer) {
  deployer.deploy(IterableMapping);
  deployer.link(IterableMapping, User);
  deployer.deploy(User);
};
