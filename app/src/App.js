import React, { Component } from 'react';
import './App.css';
import KioskView from './Components/KioskView';

// https://github.com/electron/electron/issues/7300
// We don't want to bundle electron in the webpack process so we use it's globally exposed require method.
const electron = window.require('electron');


class App extends Component {
  render() {
    return (
      <div className="App">
        <KioskView/>
      </div>
    );
  }
}

export default App;
