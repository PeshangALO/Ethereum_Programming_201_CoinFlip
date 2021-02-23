pragma solidity 0.5.12;

contract FlipCoin{
   
    uint public gameBalance = 100;
    address public gameAddress;
    mapping(address => uint) balance;
  modifier costs(uint cost) {
        require(msg.value >= cost, "Minimum amount >= 0.01 ether");
        _;
    }
     address public owner;

    modifier onlyOwner(){
        require(msg.sender == owner);
        _; //Continue execution
    }

    constructor() public{
        owner = msg.sender;
    }
    event getResult(bool);
     function deposit() public payable returns (uint)  {
        balance[msg.sender] += msg.value;
        return balance[msg.sender];
    }

function flipIt() public payable costs (0.01 ether) returns(bool) {
    require(balance[msg.sender] >= msg.value, "The user should deposit some  money first!");
    // 0 is tails, 1 is heads
    bool win;
    uint num = now % 2;
    //win
    if (num == 0){
       balance[msg.sender] += 2*msg.value;
        win = true;
    // lose
    }else if (num == 1){
      balance[gameAddress] += msg.value;
      balance[msg.sender] -= msg.value;
        win = false;
        
    }
    emit getResult(win);
    return win;
}
 
function getUserBalance() public view returns (uint) {
    return balance[msg.sender];   
}
function getGameBalance() public view returns(uint) {
    return balance[gameAddress];   
}
 function withdrawAll() public  onlyOwner returns(uint){
        msg.sender.transfer(balance[msg.sender]);
        balance[msg.sender] = 0;
        assert(balance[msg.sender] == 0);
        return address(this).balance;
    }

function playerWin(address _recipient, uint _amount) private{
    // increase player balanec with double amount.
    // decrease game balance with amount.

}
function playerLose(address _recipient, uint _amount) private{
    // decrease player balance with the amount.
    // increase game balance with amount.
  
}

}
