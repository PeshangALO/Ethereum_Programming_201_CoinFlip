/*
const People = artifacts.require("People");
const AssertionError = require("assertion-error");
const { ErrorType } = require("truffle-assertions");
const truffleAssert = require("truffle-assertions");

contract("People", async function(accounts){
it("should't create a person with age over 150 years", async function(){
    let instance = await People.deployed();
    // fails, we expect the test to fail
    await truffleAssert.fails(instance.createPerson("Bob",200,190, {value: web3.utils.toWei("1","ether")}), truffleAssert.ErrorType.REVERT);
});
it("shouldn't create a person without payment", async function(){
    let instance = await People.deployed();
    await truffleAssert.fails(instance.createPerson("Pesho", 40, 180, {value:10000}),truffleAssert.ErrorType.REVERT)
});
it("should set senior status correctly", async function(){
    let instance = await People.deployed();
    await instance.createPerson("Pesho", 65, 180, {value: web3.utils.toWei("1","ether")});
    let result = await instance.getPerson();
    assert(result.senior === true, "Senior level not set");
});

it("should set age correctly", async function(){
    let instance = await People.deployed();
    let result = await instance.getPerson();
    assert(result.age.toNumber() === 65, "Age not set corecctly");
})
it("should not allow  non-owner to delete person", async function(){
    let instance = await People.deployed();
    await instance.createPerson("Pesho", 65, 180, {from: accounts[1],value: web3.utils.toWei("1","ether")});
    await truffleAssert.fails(instance.deletePerson(accounts[1], {from: accounts[1]}, truffleAssert.ErrorType.REVERT))
   
});
it("should allow the owner to delete person", async function(){
    let instance = await People.deployed();
    // passes, we exptect the test to pass.
    await truffleAssert.passes(instance.deletePerson(accounts[1], {from: accounts[0]}))
   
});

it("should allow the owner to withdraw balance", async function(){
    let instance = await People.new();
    await instance.createPerson("Pesho", 65, 180, {from: accounts[1],value: web3.utils.toWei("1","ether")});
    await truffleAssert.passes(instance.withdrawAll({from: accounts[0]}))
   
});
it("should not allow a non-owner to withdraw balance", async function(){
    let instance = await People.new();
    await instance.createPerson("Pesho", 65, 180, {from: accounts[1],value: web3.utils.toWei("1","ether")});
    await truffleAssert.fails(instance.withdrawAll({from: accounts[1]}), truffleAssert.ErrorType.REVERT);
   
});
it("owners balance should increase after withdrawall", async function(){
    let instance = await People.new();
    await instance.createPerson("Pesho", 65, 180, {from: accounts[1],value: web3.utils.toWei("1","ether")});

    let balanceBefore = parseFloat(await web3.eth.getBalance(accounts[0]));
    await instance.withdrawAll();
    let balanceAfter = parseFloat(await web3.eth.getBalance(accounts[0]));
    assert(balanceAfter > balanceBefore, "owners balance was not increased agfter withdraw");
   
});

it("should reset balance to 0 after withdraw", async function(){
    // People.new() deploy a new contract with new instance
    let instance = await People.new();
    await instance.createPerson("Pesho", 65, 180, {from: accounts[1],value: web3.utils.toWei("1","ether")});

    await instance.withdrawAll();

    let balance = await instance.balance();
    // parseFloat converts to a readable number
    // floatBalance the balance from instance
    let floatBalance = parseFloat(balance);
    // reaslBalnce the balance queried from blockchain
    let realBalnce = await web3.eth.getBalance(instance.address);

    // web3.utils.toWei is equal to 0, we write it like this because it is correct format.
    assert(floatBalance == web3.utils.toWei("0", "ether") && floatBalance == realBalnce  ,"balance was not set to 0 after withdraw "+ floatBalance);
   
});




});
*/