const BigNumber = require("bignumber.js");
// let accounts;
export let account;
// let balance;

export function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

export function refreshThings() {
  var flipper = Flipper.deployed();

  flipper.game.call({from: account}).then(function(stateNum) {
    gameStates = ["open", "offerMade", "gameOn"];
    var gs = document.getElementById("gameState");
    gs.innerHTML = gameStates[stateNum.valueOf()];
    return flipper.buyIn.call({from: account})
    .then(function(buyIn) {
      console.log(buyIn.toString());
    })
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting balance; see log.");
  });
};

export function createGame() {

};




// window.onload = function() {
//   web3.eth.getAccounts(function(err, accs) {
//     if (err != null) {
//       alert("There was an error fetching your accounts.");
//       return;
//     }

//     if (accs.length == 0) {
//       alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
//       return;
//     }

//     accounts = accs;
//     account = accounts[0];

//     refreshThings();
//   });
// }


