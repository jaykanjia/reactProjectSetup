import React, { Component } from 'react';

/**
 * state and props diff
 * state -> mutable
 * props -> immutable
 */

/**
 * when props and state changes then component rerenderes
 */

/**
 * 4 lifecycle methods of react component
 * ------------------------------------------------------
 * 1: Mounting -> when component renders in DOM
 *   before mounting
 *    i.   constuctor() {}  -> calls only once
 *    ii.  static getDerivedStateFromProps() {}
 *   mounting
 *    iii. render() {}
 *   after mounting
 *    iV.  componentDidMount() {}  -> calls only once
 * 2: Updating -> update component by state or props
 *    i.   static getDerivedStateFromProps() {}
 *    ii.  render() {}
 *    setState()
 * 3: Unmounting -> when component removes from DOM
 * 4: error
 */

// class based component
class Child1 extends Component {
  /**
   * constructor is used for
   * ----------------------------------------------------
   * 1. setting initial state values using props
   * 2. method binding
   * 3. analytical purpose -> API call
   */
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      // greet: `Hello ${props.name}`,
    };

    // bind simple function to the class
    // apply and bind
    this.simpleMethod = this.simpleMethod.bind(this);
  }

  /**
   * gdsfp is used when we want to change data that comes from the parent through props
   * and when the parent will change the props value then child chould change this value
   */

  static getDerivedStateFromProps(props, state) {
    console.log(state);
    return {
      greet: `Hello ${props.name}`,
    };
  }

  /**
   * domponentDidMount is used for
   * 1. API calls
   * 2. event register
   */
  componentDidMount() {
    document.addEventListener('copy', () => {
      console.log('copied');
    });
  }

  // always prefer to use arrow function in class
  increment = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  decrement = () => {
    this.setState((state) => ({ count: state.count - 1 }));
  };

  // if we want to use simple function in class then we have to bind that method to the class
  simpleMethod() {
    console.log(this.state);
  }

  render() {
    console.log('hello from child 1');
    const { count, greet } = this.state;
    return (
      <div>
        <h1>{greet}</h1>
        <button type="button" onClick={this.increment}>
          +
        </button>
        {count}
        <button type="button" onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}

Child1.propTypes = String;

export default Child1;
