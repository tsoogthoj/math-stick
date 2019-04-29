import React, { Component } from 'react'
import './App.css'
import Box from "./components/mathBox/box"
import Modal from "./components/modal/modal"

class App extends Component {
  state = {
    modalOpen: true,
    openedModal: "add",
  }

  modalStatus = () => {
    this.state.modalOpen ? (this.setState({ modalOpen: false })) : (this.setState({ modalOpen: true }))
  }

  openedModal = (event) => {
    this.setState({
      openedModal: event.target.dataset.name
    })
    console.log(event.target.dataset.name)
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="addMoreButton button"
            data-name="add"
            onClick={ (event) => {this.modalStatus(); this.openedModal(event)}
            }
          >
            Add Words/Sentence
        </div>
          <div className="printButton button"
            onClick={this.modalStatus}>
            Print
        </div>
          <div className="alphabetButton button"
            data-name="key"
            onClick={ (event) => {this.modalStatus(); this.openedModal(event)}
          }>
            Alphabets Key
        </div>
        </div>
        < Box />
        <div className={(this.state.modalOpen ? "modalOpen" : "modalClose")}>
          {(this.state.modalOpen ?
            < Modal
              active={this.modalStatus}
              openedModal={this.state.openedModal}
            /> : null)}
        </div>
      </div>
    );
  }
}

export default App;
