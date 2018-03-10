import React from 'react';

export default class Home extends React.Component {
  componentDidMount() {
    this.jumpToHash(this.props.location.hash);
  }

  componentDidUpdate() {
    this.jumpToHash(this.props.location.hash);
  }

  // Needed as react-router can't handle fragment links ;—;
  jumpToHash(hash) {
    if (!hash) return;
    const element = document.getElementById(hash.slice(1));
    if (element) {
      element.scrollIntoView();
    }
  }

  render () {
    return (
      <div>

      </div>
    );
  }
}
