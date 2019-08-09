git import React, { Component } from 'react';

import Layout from './components/Layout/Layout.jsx'
import Math from './containers/Math/Math'

class App extends Component {
  state = {
    words: [],
    mathkey: {
      A: 7,
      B: 5,
      C: 9,
      D: 1,
      E: 12,
      F: 45,
      G: 43,
      H: 87,
      I: 12,
      J: 42,
      K: 63,
      L: 21,
      M: 7,
      N: 8,
      O: 12,
      P: 32,
      R: 87,
      S: 45,
      T: 12,
      U: 12,
      V: 56,
      W: 72,
      X: 53,
      Y: 12,
      Z: 45
    }
  }
  
  render() {
    return (
      <div>
        <Layout>
            <Math mathKey={this.state.Mathkey}/>
        </Layout>
      </div>
    );

  }
}


export default App;