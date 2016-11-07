import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App.jsx';
// import { Web3 } from 'web3';




window.addEventListener('load', function() {
  // Supports Metamask and Mist, and other wallets that provide 'web3'.
  if (typeof web3 !== 'undefined') {
    // Use the Mist/wallet provider.
    window.web3 = new Web3(web3.currentProvider);
  } else {
    // No web3 detected. Show an error to the user or use Infura: https://infura.io/
  }
});



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
