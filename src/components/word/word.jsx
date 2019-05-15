import React, { Component } from "react"
import "./word.css"

class Word extends Component {
    handleSubmit(event) {
        event.preventDefault()
        console.log("sumbit")
      }

    render() {
        return (
            <div className="word-wrapper">
                <form className="word-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="wordLabel">
                            Word 1
                        </label>
                        <input type="text" />
                    </div>
                    
                    <div className="wordAdd">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                    </div>
                    <input className="wordSubmit" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Word