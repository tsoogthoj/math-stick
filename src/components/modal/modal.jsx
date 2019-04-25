import React, { Component } from "react"
import "./modal.css"
import clearIcon from "./img/clear.svg"

class Modal extends Component {

    render() {
        return (
            <div className="modal-wrapper">
                <div className="modal-exit">
                    <img src={clearIcon} alt="X"/>
                </div>
                <div className="modal-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magnam nisi animi ullam, minus reiciendis veniam atque itaque minima, vel neque. Placeat molestiae laudantium eveniet voluptatum iste optio adipisci nesciunt!
                </div>
            </div>
        )
    }
}

export default Modal;