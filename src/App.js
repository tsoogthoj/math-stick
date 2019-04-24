import React, { Component } from 'react';
import './App.css';
import Box from "./components/mathBox/box";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="header">
        <div className="addMoreButton button">
          Add Words/Sentence
        </div>
        <div className="printButton button">
          Print
        </div>
      </div>
        < Box />
      </div>
    );
  }
}

export default App;
