import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Calculator from '~/src/calculator';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { calc: new Calculator() };
  }

  render() {
    const { calc } = this.state;
    return (
      <div>
        <h1>Hello, World!</h1>
        <br />
        <p>132 * 68 = {calc.multiply(132, 68)}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
