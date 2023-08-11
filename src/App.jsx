import React, { Component } from 'react';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import Child3 from './components/Child3';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Jay',
    };

    console.log('Hello from App');
  }

  changeProp = (newName) => {
    this.setState((state) => ({ ...state, name: newName }));
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <Child1 name={name} />
        <Child2 />
        <Child3 />
        <button type="button" onClick={() => this.changeProp('JK')}>
          Change Prop From App
        </button>
      </div>
    );
  }
}

export default App;
