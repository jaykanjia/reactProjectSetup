import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

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
 *    iV.  componentDidMount() {}  -> calls only once when mounted
 *
 * 2: Updating -> update component by state or props
 *    i.   static getDerivedStateFromProps() {}
 * *  ii. shouldComponentUpdate(nextProps, nextState) {}
 *      -> used to define if we want to upadate the component or not
 *      -> using shallowCompare in shouldComponentUpdate
 *      -> using extends PureComponent
 *      -> export default memo(Child2) in functional component
 *      -> export default memo(Child2, (prevProps, nextProps) => { ... })
 *    iii.  render() {}
 *    iv.   getSnapshotBeforeUpdate(prevProps, prevState) { return snapshot }
 *      -> used for implement 60 fps rule (logic divided into two parts)
 *    v.    componentDidUpdate(prevProps, prevState, snapshot) {}
 *      -> third parameter from getShanpshotBeforeUpdate() method
 *
 * 3: Unmounting -> when component removes from DOM
 * *  i.  componentWillUnmount() {}
 *      -> used for unregister events
 *      -> remove all async events like setInterval
 *      -> if api res is not come before unmounting then kill the api req
 *      -> used for memory cleanup
 *
 * 4: error
 * *  i.  static getDerivedStateFromError(error) { return {error: error}}
 *      -> now we have error in this.state
 *      -> write error hadling code in that component in which you want to show the error
 *      -> like parent main component
 *    ii. componentDidCatch(error, stack) {}
 *      -> error is error and stack is full info about error line time, line, etc...
 *      -> used for logger store error in database when error occures
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
   * and when the parent will change the props value then child should change this value
   */

  static getDerivedStateFromProps(props, state) {
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

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('nextProps', nextProps);
    // console.log('nextState', nextState);
    // if (nextProps.name !== 'JK') {
    //   return false;
    // }
    return shallowCompare(this, nextProps, nextState);
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
        <h1>Child 1</h1>
        <h2>{greet}</h2>
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
