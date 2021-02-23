const FlipCoin = artifacts.require("FlipCoin");
const AssertionError = require("assertion-error");
const { ErrorType } = require("truffle-assertions");
const truffleAssert = require("truffle-assertions");

contract("FlipCoin", async function(accounts){
    it("should flip the coin, player lose", async function(){
        let instance = await FlipCoin.deployed();
       assert(instance.flipIt(2,false), "player win insted of losing");
    });
    it("should flip the coin, player win", async function(){
        let instance = await FlipCoin.deployed();
       assert(instance.flipIt(2,true), "player lose insted of losing");
    });
    it("should return balance", async function(){
        let instance = await FlipCoin.deployed();
       assert(instance.getUserBalance(), "player lose insted of losing");
       console.log(instance.getUserBalance());
    });
    
  
    
});