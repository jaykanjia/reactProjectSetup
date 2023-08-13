import React, { Component } from 'react';

class Child3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // eslint-disable-next-line no-unused-vars
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    console.log('hello from child 3');
    return (
      <div>
        <h2>Child3</h2>
      </div>
    );
  }
}

export default Child3;
