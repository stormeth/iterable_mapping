var Contact = artifacts.require("./Contact.sol");

contract('Sc1', function(accounts) {

    it("t1", function() {
        var meta;

        return Contact.new("bill",51).then(function(instance) {
            meta = instance;

            return meta.age.call();
        }).then(function(age) {
            myage = age.toNumber();
            // console.log('age', myage);
            assert.equal(myage, 51, "age should be 51");

            return meta.firstname.call();
        }).then(function(fn) {
            // console.log('name', fn);
            assert.equal(fn, "bill", "first name should be bill");
        });
    });

/*
    To set constructor params in deployed pass it into the migration
    http://ethereum.stackexchange.com/questions/10830/how-to-pass-constructor-parameters-to-a-contract-using-truffle
*/

    it("t2", function() {
        var meta;

        return Contact.deployed().then(function(instance) {
            meta = instance;

            return meta.age.call();
        }).then(function(age) {
            myage = age.toNumber();
            // console.log('age', myage);
            assert.equal(myage, 52, "age should be 52");

            return meta.firstname.call();
        }).then(function(fn) {
            // console.log('name', fn);
            assert.equal(fn, "jim", "first name should be jim");
        });
    });

});
