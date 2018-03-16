// This module is from Blair Anderson's blog. It explains not using redux and managing the 
// application state by wrapping this code around app in index.js.
// Link: https://medium.com/@blairanderson/you-probably-dont-need-redux-1b404204a07f
import React, { Component } from 'react';

class AppState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      async: {},
      header: {
        text: 'Welcome to Triplann',
      }
    };
    this.setAppState = this.setAppState.bind(this);
  }

  setAppState(updater, callback) {
    // newState can be object or function!
    this.setState(updater, () => {
      if (this.props.debug) {
        console.log('setAppState', JSON.stringify(this.state));
      }
      if (callback) {
        callback();
      }
    });
  }

  render() {
    return (
      <div className="AppState">
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            appState: this.state,
            setAppState: this.setAppState
          });
        })}
      </div>
    );
  }
}

export default AppState;
