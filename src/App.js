import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state={
  val:0
  };  

  Increse = () => {
    this.setState({ val: this.state.val + 1 })
  }

  Decrese = () => {
    this.setState({ val: this.state.val - 1 })
  }

  Reset = () => {
    this.setState({ val: 0 })
  }
  

  render() {
    return (     
      <div className="App">
         <div>{this.state.val}</div>       
         <button onClick={this.Increse}>+</button>
         <button onClick={this.Decrese}>-</button>
         <button onClick={this.Reset}>Reset</button>
      </div>
    );
  }
}

export default App;
