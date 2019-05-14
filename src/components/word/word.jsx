import React, { Component } from "react"
import "./word.css"

import addImg from "./img/add.svg"

class Word extends Component {
    handleSubmit(event) {
        event.preventDefault();
        
      }

    render() {
        return (
            <div className="word-wrapper">
                <form className="word-form" onSubmit={this.handleSubmit}>
                    <label className="wordLabel">
                        First Word
                        <input type="text" value="" onChange={this.handleChange} />
                    </label>
                    <label className="wordLabel">
                        Second Word
                        <input type="text" value="" onChange={this.handleChange} />
                    </label>
                    <label className="wordLabel">
                        Third Word
                        <input type="text" value="" onChange={this.handleChange} />
                    </label>
                    <label className="wordLabel">
                        Fourth Word
                        <input type="text" value="" onChange={this.handleChange} />
                    </label>
                    <label className="wordLabel">
                        Fifth Word
                        <input type="text" value="" onChange={this.handleChange} />
                    </label>
                    <div className="wordAdd">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                    </div>
                    <input className="wordSubmit" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Word