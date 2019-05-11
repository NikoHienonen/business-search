import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import DashBoard from './businesses/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="container">
        <DashBoard />
      </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));