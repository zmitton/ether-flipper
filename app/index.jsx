import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App.jsx';

// import { Web3 } from 'web3';
// import { refreshThings } from './javascripts/app.js'

// window.addEventListener('load', function() {
//   // Supports Metamask and Mist, and other wallets that provide 'web3'.
//   if (typeof web3 !== 'undefined') {
//     // Use the Mist/wallet provider.
//     window.web3 = new Web3(web3.currentProvider);

//     window.web3.eth.getAccounts((err, accs) => {
//       if (err !== null) {
//         alert("There was an error fetching your accounts.");
//         return;
//       }

//       if (accs.length == 0) {
//         alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
//         return;
//       }
//       const accounts = accs;
//       const account = accounts[0];
//       refreshThings();

//   });
// }
// else {
//     console.log("not working");
//   }
// });



render( <AppContainer><App/></AppContainer>, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    const App = require('./components/App.jsx').default;
    render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
