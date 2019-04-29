import React, { Component } from 'react'
import "./addContent.css"
class AddContent extends Component {
    state = {
        addDisplay: "word",
    }

    render() {
        return(
            <div className="addContent-wrapper">
                <div className="addContent-header">
                    <div className="addContent-button button">Words</div>
                    <div className="addContent-button button">Sentence</div>
                </div>
                <div className="addContent-content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt soluta, sunt in quam saepe sed itaque, minus dicta ea odio dignissimos enim provident, impedit expedita molestiae voluptatem quia ab perspiciatis.
                </div>
            </div>

        )
    }
}

export default AddContent