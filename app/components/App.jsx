import styles from './../stylesheets/app.scss';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1><span className={styles.blueBg}>It</span> Works!</h1>
      </div>
    )
  }
}
