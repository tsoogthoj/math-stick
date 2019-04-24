import React, { Component } from 'react';
import './App.css';
import Box from "./components/mathBox/box";

class App extends Component {
  state = {
    modalOpen: false,
  }

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
        <div className="alphabetButton button">
          Alphabets Key
        </div>
      </div>
        < Box />
        <div className={"modal " + (this.state.modalOpen ? "modalOpen" : "")}>
        
        </div>
      </div>
    );
  }
}

export default App;
