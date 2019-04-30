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

    render() {
        return (
            <div className="addContent-wrapper">
                <div className="addContent-header">
                    <div
                        onClick={this.handleChange}
                        data-name="word"
                        className="addContent-button button">Words</div>
                    <div
                        onClick={this.handleChange}
                        data-name="sentence"
                        className="addContent-button button">Sentence</div>
                </div>
                <div className="addContent-content">
                    {this.switchAddContent(this.state.addDisplay)}
                </div>
            </div>

        )
    }
}

export default AddContent