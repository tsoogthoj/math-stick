import React, { Component } from 'react'

import "./Layout.css"

class Layout extends Component {

    render() {
        return (
            <div className="LayoutWrapper">
                <main className="LayoutContent">
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout