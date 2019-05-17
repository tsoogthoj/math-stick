import React, { Component } from "react"
import "./word.css"

class Word extends Component {
    state = {
        wordAmount: 1,
        wordArray: [1],
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log("sumbit")
    }

    addWord = () => {
        let addNum = this.state.wordAmount
        addNum += 1
        let wordArray = this.state.wordArray
        wordArray.push(addNum)
        console.log(wordArray)
        this.setState({
            wordAmount: addNum,
            wordArray: wordArray
        }, () => {
            console.log(this.state)
        })

    }

    wordForm = () => {

    }


    render() {

        return (
            <div className="word-wrapper">
                <form className="word-form" onSubmit={this.handleSubmit}>
                    {this.state.wordArray.map( num => 
                        <div className="form-group" key={num}>
                            <label className="wordLabel">
                                Word {num}
                            </label>
                            <input type="text" />
                        </div>
                    )}
                    <div className="word-addSubmit">
                        <div className="wordAdd" onClick={this.addWord}>
                            <svg width="40" height="40" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                        </div>
                        <input className="wordSubmit" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Word