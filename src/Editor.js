import React, { Component } from 'react';
import './Editor.css';
import Toolbar from './Toolbar';
import Canvas from './Canvas';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
  }

  update = (selected) => {
    this.setState({
      selected: selected
    });        
    this.refs.canvas.setTool(selected)
  }

  render() {
    return (
      <div className="Editor">
        <Toolbar update={this.update} />
        <Canvas ref="canvas" diagram={this.props.diagram} update={this.props.update} />
      </div>
    );
  }
}

export default Editor;
