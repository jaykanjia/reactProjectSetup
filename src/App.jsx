import React, { Component } from 'react';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import Child3 from './components/Child3';
import './style.css';
import Child4 from './components/Child4';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Jay',
      count: 0,
    };

    console.log('Hello from App');
  }

  changeName = (newName) => {
    this.setState((state) => ({ ...state, name: newName }));
  };

  render() {
    const { name, count } = this.state;
    return (
      <div>
        <p>{`count: ${count}`}</p>
        <hr />
        {/* child1 should only rerender on onyl state.name */}
        {/* using shouldComponentUpdate and shallowCompare */}
        <Child1 name={name} />
        <hr />
        {/* using memo for function component */}
        <Child2 count={count} />
        <hr />
        {/* using shouldComponentUpdate for never rerender */}
        <Child3 />
        <hr />
        {/* using PureComponent for auto implement of shouldComponentUpdate */}
        <Child4 />
        <hr />
        <button type="button" onClick={() => this.changeName('JK')}>
          Change Name
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ count: 5 });
          }}
        >
          Change Count
        </button>
      </div>
    );
  }
}

export default App;
