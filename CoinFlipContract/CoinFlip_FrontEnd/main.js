var web3 = new Web3(Web3.givenProvider);
var contractIntsance;

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts){
        contractIntsance = new web3.eth.Contract(abi,"0x27f357acdd9473E4C585d2898439D89824E772Aa",{from: accounts[0]});
        console.log(contractIntsance);
        
    });
   
$("#flip-coin-button").click(flipTheCoin);
$("#get_data_button").click(getData2);
$("#deposit_button").click(deposit2);
$("#withDraw_button").click(withDrawAll);

});
function withDrawAll(){
    var config = {
        value: web3.utils.toWei("0", "ether")
    }
    contractIntsance.methods.withdrawAll().send(config)
    .on("receipt", function(receipt){
        alert("Withdraw is done")
    
    })
    
}
function deposit2(){
    var value = $('#deposit_input').val();
    var config = {
        value: web3.utils.toWei(value.toString(), "ether")
    }
    contractIntsance.methods.deposit().send(config)
    .on("receipt", function(receipt){
        alert("Done")
    
    })
    
}

function getData2(){
    contractIntsance.methods.getGameBalance().call().then(function(result){
        console.log(result);
        // using jquery to display data.
        const stringWei = result.toString()
        const etherValue = web3.utils.fromWei(stringWei, "ether");
        $('#game_output').text(etherValue);
    });
    contractIntsance.methods.getUserBalance().call().then(function(result1){
        console.log(result1);
        const stringWei = result1.toString()
        const etherValue = web3.utils.fromWei(stringWei, "ether");
        // using jquery to display data.
        $('#user_output').text(etherValue);
    });
   
}

function flipTheCoin(){
    var value = $('#bet_input').val();
    var config = {
        value: web3.utils.toWei(value.toString(), "ether")
    }

    contractIntsance.methods.flipIt().send(config)
    .on("receipt", function(receipt){
        console.log(receipt);
        
        if(receipt.events.getResult.returnValues[0] === false){
            alert("You lost " + value  + " Ether!");
        }
        else if(receipt.events.getResult.returnValues[0] === true){
            alert("You won "  + value * 2 + " Ether!");
        }
        
    getData2()
    })
    
    
  
        
  
   
}