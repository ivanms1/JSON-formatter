import React, { Component } from 'react';
import './App.css';

import Input from './components/Input';
import Output from './components/Output';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>JSON Cleaner</h2>
        <div className="app-container">
          <Input/>
          <Output/>
        </div>
      </div>
    );
  }
}

export default App;
