import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome"
import Hello from "./components/Hello";

class App extends Component {
  render() {
    return (
      <div className="App">           
        <Greet name="Bruce" heroName="Batman">
          <p>This is Children Props</p>
        </Greet>
        <Greet name="Clark" heroName="SuperMan">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman"/>
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="SuperMan" />
        <Welcome name="Diana" heroName="Wonder Woman" />                        
      </div>
    );
  }
}

export default App;
