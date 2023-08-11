import React, { Component } from 'react';

class Child3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('hello from child 3');
    return <div>Child3</div>;
  }
}

export default Child3;
