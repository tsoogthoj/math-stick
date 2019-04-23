import React, { Component } from 'react';
import './App.css';
import Box from "./components/mathBox/box"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="addMoreButton button">
          Add Words/Sentence
        </div>
        < Box />
      </div>
    );
  }
}

export default App;
