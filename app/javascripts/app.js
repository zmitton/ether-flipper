var BigNumber = require("bignumber.js");
var accounts;
var account;
var balance;

function createGame() {
  var flipper = Flipper.deployed();

  var amount = new BigNumber(document.getElementById("amount").value * 1e18).toString();

  setStatus("Initiating transaction... (please wait)");

  flipper.createGame({from: account, value: amount, gas: 500000}).then(function() {
    setStatus("Transaction complete!");
    refreshThings();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error sending coin; see log.");
  });
};


function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function refreshThings() {
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

// function sendCoin() {
//   var meta = MetaCoin.deployed();

//   var amount = parseInt(document.getElementById("amount").value);
//   var receiver = document.getElementById("receiver").value;

//   setStatus("Initiating transaction... (please wait)");

//   meta.sendCoin(receiver, amount, {from: account}).then(function() {
//     setStatus("Transaction complete!");
//     refreshBalance();
//   }).catch(function(e) {
//     console.log(e);
//     setStatus("Error sending coin; see log.");
//   });
// };

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];

    refreshThings();
  });
}
