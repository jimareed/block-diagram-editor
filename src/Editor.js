import React, { Component } from 'react';
import './Editor.css';
import Toolbar from './Toolbar';
import Canvas from './Canvas';

class Editor extends Component {
  render() {
    return (
      <div className="Editor">
        <div>
        <Toolbar />
        </div>
        <div>
        <Canvas />
        </div>
      </div>
    );
  }
}

export default Editor;
