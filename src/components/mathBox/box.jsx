import React, { Component } from "react"
import "./box.css"

class Box extends Component {
    render() {
        return(
            <div className="box-wrapper">
                <div className="box-holder">
                    <div className="box-card box-border">
                        <div className="box-mathOperation">
                            +
                        </div>
                        <div className="box-mathNumbers">
                            <div className="box-topNumber box-number">
                                3
                            </div>
                            <div className="box-bottomNumber box-number">
                                3
                            </div>
                        </div>

                    </div>
                        <div className="box-outsideBottom box-mathAnswer box-border">
                            
                        </div>
                        <div className="box-outsideBottom box-letter">
                        
                        </div>
                </div>

                <div className="box-holder">
                    <div className="box-card box-border">
                        <div className="box-mathOperation">
                            +
                        </div>
                        <div className="box-mathNumbers">
                            <div className="box-topNumber box-number">
                                3
                            </div>
                            <div className="box-bottomNumber box-number">
                                3
                            </div>
                        </div>

                    </div>
                        <div className="box-outsideBottom box-mathAnswer box-border">
                            
                        </div>
                        <div className="box-outsideBottom box-letter">
                        
                        </div>
                </div>

            </div>
        )
    }
}

export default Box