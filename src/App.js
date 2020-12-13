import React, { Component } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import BoxList from './components/BoxList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { boxes: [] }
    this.createBox = this.createBox.bind(this);
  }

  createBox(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox]
    })
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">Color Box Maker Thingy</h1>
        <BoxForm createBox={this.createBox}/>
        <BoxList boxes={this.state.boxes}/>
      </div>
    );
  }
}

export default App;
