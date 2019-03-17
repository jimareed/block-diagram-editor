import React, { Component } from 'react';
import './App.css';
import Editor from './Editor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
          <svg width="44" height="18">
            <rect x="14" y="1" width="18" height="12" stroke="white" fill="transparent" strokeWidth="3" />
          </svg>
          <b>Block Diagram Editor</b>
          </div>
        </header>
        <Editor diagram={this.props.diagram} update={this.props.update} />
      </div>
    );
  }
}

export default App;
