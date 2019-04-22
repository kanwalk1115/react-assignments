import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {DisplayName} from './DisplayName'

class App extends Component {
  render() {
    return (
    <div>
    <DisplayName first="John" last="Doe"></DisplayName>
    </div>
    )
  }
}

export default App;
