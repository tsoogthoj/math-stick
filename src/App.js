import React, { Component } from 'react'
import './App.css'
import Box from "./components/mathBox/box"
import Modal from "./components/modal/modal"

class App extends Component {
  state = {
    modalOpen: false,
  }

  modalStatus = () => {
    this.state.modalOpen ? (this.setState({ modalOpen: false })) : (this.setState({ modalOpen: true }))
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="addMoreButton button"
            onClick={this.modalStatus}
          >
            Add Words/Sentence
        </div>
          <div className="printButton button"
            onClick={this.modalStatus}>
            Print
        </div>
          <div className="alphabetButton button"
            onClick={this.modalStatus}>
            Alphabets Key
        </div>
        </div>
        < Box />
        <div className={(this.state.modalOpen ? "modalOpen" : "modalClose")}>
          {(this.state.modalOpen ? < Modal /> : null)}
        </div>
      </div>
    );
  }
}

export default App;
