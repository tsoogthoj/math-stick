import React, {Component} from "react"

import "./keyContent.css"

class KeyContent extends Component {

    render() {
        let alphabet = [
            {alphabet: "A", value: 7},
            {alphabet: "B", value: 35},
            {alphabet: "C", value: 48},
            {alphabet: "D", value: 15},
            {alphabet: "E", value: 17},
            {alphabet: "F", value: 180},
            {alphabet: "G", value: 13},
            {alphabet: "H", value: 4},
            {alphabet: "I", value: 12},
            {alphabet: "J", value: 100},
            {alphabet: "K", value: 1000},
            {alphabet: "L", value: 40},
            {alphabet: "M", value: 8},
            {alphabet: "N", value: 18},
            {alphabet: "O", value: 20},
            {alphabet: "P", value: 30},
            {alphabet: "Q", value: 26},
            {alphabet: "R", value: 9},
            {alphabet: "S", value: 24},
            {alphabet: "T", value: 22},
            {alphabet: "U", value: 60},
            {alphabet: "V", value: 70},
            {alphabet: "W", value: 36},
            {alphabet: "X", value: 80},
            {alphabet: "Y", value: 98},
            {alphabet: "Z", value: 66},
        ]

        let renderAlphabet = alphabet.map((data) => 
        <div className="keyContent-data">
            <div className="keyContent-alphabet ">
                {data.alphabet}
            </div>
            <div className="keyContent-value">
                {data.value}
            </div>
        </div>
        )
        return (
            <div className="keyContent-wrapper">
                {renderAlphabet}
            </div>
        )
    }
}

export default KeyContent