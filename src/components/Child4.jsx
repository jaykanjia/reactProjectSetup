import React, { PureComponent } from 'react';

class Child4 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('hello from child 4');
    return (
      <div>
        <h2>Child4</h2>
      </div>
    );
  }
}

export default Child4;
