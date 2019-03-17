import React, { Component } from 'react';
import './Editor.css';
import Toolbar from './Toolbar';
import Canvas from './Canvas';

class Editor extends Component {
  render() {
    return (
      <div className="Editor">
        <Toolbar />
        <Canvas diagram={this.props.diagram} update={this.props.update} />
      </div>
    );
  }
}

export default Editor;
