pragma solidity ^0.4.4;
contract Flipper{
    uint    public buyIn;
    address public player0;
    address public player1;
    uint    public seedBlock;
    enum GameStates {open, offerMade, gameOn}
    GameStates public game;
    address owner;
    
    modifier onlyState(GameStates expected){if(expected == game){_;}else{throw;}}
    
    function Flipper(){
        game = GameStates.open;
        owner = 0x2a956e2fdcf3e338d0e925c68bcb73e7c8bb86c4;
    }
    
    function createGame() payable onlyState(GameStates.open){
        player0 = msg.sender;
        buyIn = msg.value;
        game = GameStates.offerMade;
    }
    
    function joinGame() payable onlyState(GameStates.offerMade){
        if(msg.value != buyIn) throw;
        player1 = msg.sender;
        seedBlock = block.number + 2;
        game = GameStates.gameOn;
    }
    
    function settle() onlyState(GameStates.gameOn){
        if(block.number <= seedBlock) throw;
        if(block.number <= seedBlock + 256) {
            payWinner();
        }
    }

    function collectAbandonedFunds() onlyState(GameStates.open){
        if(!owner.send(this.balance)) throw;
    }

    function payWinner() private{
        game = GameStates.open;
        if(uint(block.blockhash(seedBlock))%2 == 0){
            if(!player0.send(this.balance)) throw;
        }else{
            if(!player1.send(this.balance)) throw;
        }
    }
}

