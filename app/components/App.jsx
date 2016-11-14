import React from 'react';
import BigNumber from 'bignumber';
import Flipper from '../../contracts/Flipper.sol';
import styles from './../stylesheets/app.scss';

import { refreshThings } from '../javascripts/app.js'

const Web3 = require('web3');

window.addEventListener('load', function() {
  // Supports Metamask and Mist, and other wallets that provide 'web3'.
  if (typeof web3 !== 'undefined') {
    // Use the Mist/wallet provider.
    window.web3 = new Web3(web3.currentProvider);
  } else {
    // No web3 detected. Show an error to the user or use Infura: https://infura.io/
  }
});


Flipper.setProvider(window.web3.currentProvider);

// window.addEventListener('load', function() {
//   // Supports Metamask and Mist, and other wallets that provide 'web3'.
//   if (typeof web3 !== 'undefined') {
//     // Use the Mist/wallet provider.
//     window.web3 = new Web3(web3.currentProvider);

//     web3.eth.getAccounts((err, accs) => {
//       if (err !== null) {
//         alert("There was an error fetching your accounts.");
//         return;
//       }

//       if (accs.length == 0) {
//         alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
//         return;
//       }
//       const accounts = accs;
//       account = accounts[0];
//       refreshThings();
//   });
// }
// else {
//     console.log("not working");
//   }
// });



// import { setStatus } from '../javascripts/app.js';
// const account = account;

export default class App extends React.Component {


  handleClickCreate() {
    const flipper = Flipper.deployed();
    // const amount = new BigNumber(document.getElementById("amount").value * 1e18).toString();

    // setStatus("Initiating transaction... (please wait)");
    const account = "";
    const amount = "";

    flipper.createGame({from: account, value: amount, gas: 500000}).then(function() {
      // setStatus("Transaction complete!");
      refreshThings();
    }).catch(function(e) {
      console.log(e);
      // setStatus("Error sending coin; see log.");
    });
  }

  render() {
    return (
      <div>
        <h3>Game State: <span className="black"><span id="gameState"></span></span></h3>
        <br />
        <h1>create</h1>
        <br />
        <label htmlFor="amount">Amount:</label>
        <input type="text" id="amount" placeholder="e.g., 95" />
        <br />
        <button id="create" onClick={this.handleClickCreate}>Create Game</button>
        <span id="status"></span>
      </div>
    )
  }
}
