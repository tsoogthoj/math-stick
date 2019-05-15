import React, { Component } from "react"
import "./modal.css"
import clearIcon from "./img/clear.svg"


import AddContent from "../addContent/addContent"
import KeyContent from "../keyContent/keyContent"

class Modal extends Component {

    switchModalContent = (content) => {
        switch (content) {
            case "add":
                return < AddContent />
            case "key":
                return < KeyContent />;
            default:
                return null
        }
    }

    render() {
        return (
            <div className="modal-wrapper">
                <div className="modal-exit">
                    <img src={clearIcon} alt="X" onClick={this.props.active} />
                </div>
                <div className="modal-body">
                    {this.switchModalContent(this.props.openedModal)}
                </div>
            </div>
        )
    }
}

export default Modal;