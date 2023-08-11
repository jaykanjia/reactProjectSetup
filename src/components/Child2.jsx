import React, { Component } from 'react';

class Child2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('hello from child 2');
    return <div>Child2</div>;
  }
}

export default Child2;
