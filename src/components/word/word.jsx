import React, { Component } from "react"

import "./word.css"

class Word extends Component {
    handleSubmit(event) {
        event.preventDefault();
        
      }

    render() {
        return (
            <div className="word-wrapper">
                <form className="word-form" onSubmit={this.handleSubmit}>
                    <label>
                        First Word
                        <input type="text" value="" onChange={this.handleChange} />
                    </label>
                    <label>
                        Second Word
                        <input type="text" value="" onChange={this.handleChange} />
                    </label>
                    <label>
                        Third Word
                        <input type="text" value="" onChange={this.handleChange} />
                    </label>
                    <label>
                        Fourth Word
                        <input type="text" value="" onChange={this.handleChange} />
                    </label>
                    <label>
                        Fifth Word
                        <input type="text" value="" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Word