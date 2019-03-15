import React, { Component } from 'react';
import './App.css';
import Editor from './Editor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Block Diagram Editor
        </header>
        <Editor />
      </div>
    );
  }
}

export default App;
