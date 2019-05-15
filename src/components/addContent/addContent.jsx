import React, { Component } from 'react'
import "./addContent.css"

import Word from "../word/word"
import Sentence from "../sentence/sentence"

class AddContent extends Component {
    state = {
        addDisplay: "word",
    }

    switchAddContent = (content) => {
        switch (content) {
            case "word":
                return < Word />
            case "sentence":
                return < Sentence />;
            default:
                return null
        }
    }

    handleChange = event => {
        this.setState({
            addDisplay: event.target.dataset.name
        });
    }

    selected = () => {
        switch (this.state.addDisplay) {
            case "word":
                return "addContent-selected"
            case "sentence":
                return "addContent-selected"
            default:
                return null
        }
    }
    render() {
        return (
            <div className="addContent-wrapper">
                <div className="addContent-header">
                    <div
                        onClick={this.handleChange}
                        data-name="word"
                        className={this.state.addDisplay === "word" ? "addContent-button button addContent-selected" : "addContent-button button"} >Words</div>
                    <div
                        onClick={this.handleChange}
                        data-name="sentence"
                        className={this.state.addDisplay === "sentence" ? "addContent-button button addContent-selected" : "addContent-button button"}>Sentence</div>
                </div>
                <div className="addContent-content">
                    {this.switchAddContent(this.state.addDisplay)}
                </div>
            </div>

        )
    }
}

export default AddContent