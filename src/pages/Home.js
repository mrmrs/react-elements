import React from 'react';

import Div from '../elements/Div'
import H1 from '../elements/H1'

export default class Home extends React.Component {
  componentDidMount() {
    this.jumpToHash(this.props.location.hash)
  }

  componentDidUpdate() {
    this.jumpToHash(this.props.location.hash)
  }

  // Needed as react-router can't handle fragment links ;—;
  jumpToHash(hash) {
    if (!hash) return
    const element = document.getElementById(hash.slice(1))
    if (element) {
      element.scrollIntoView()
    }
  }

  render () {
    return (
      <Div p={5} bg='red' color='white'>
        <H1 fontSize={[ 2, 3, 4 ]}>Home</H1>
      </Div>
    );
  }
}
