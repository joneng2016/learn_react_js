import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome"
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from './components/Counter';
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from './components/EventBind';

class App extends Component {

  render() {
    return (
      <div className="App">
        <EventBind />
      </div>
    );
  }
}

export default App;
