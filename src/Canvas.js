import React, { Component } from 'react';
import './Canvas.css';


function getMousePosition(pageX, pageY) {

  var canvas = document.getElementById('editor-canvas');
  var clientRect = canvas.getBoundingClientRect();

  return {
    x: pageX - clientRect.x,
    y: pageY - clientRect.y
  };
}

class Canvas extends Component {

  handleBlockClick(index) {

    var event = {
      eventType: "block",
      index: index,
      x: 0,
      y: 0
    };

    this.props.update(event);
  };

  handleCanvasClick = (e) => {
    var event = {
      eventType: "canvas",
      index: 0,
      x: 0,
      y: 0
    };

    var pos = getMousePosition(e.pageX,e.pageY);

    event.x = pos.x;
    event.y = pos.y;

    this.props.update(event);
  };

  render() {
    return (
      <div className="Canvas">
        <svg width="calc(100% - 2px)" height="calc(95vh - 10px)" align="center">
          <rect x="0" y="0" id="editor-canvas" width="calc(100% - 2px)" height="calc(95vh - 10px)" stroke="white" fill="transparent" strokeWidth="0"
              onClick={ this.handleCanvasClick } 
          />
          {this.props.diagram.blocks.map((value, index) => {
              return  <rect x={value.x} y={value.y} width={this.props.diagram.blockWidth} height={this.props.diagram.blockHeight} id={index} stroke="black" fill="transparent" strokeWidth="4"
                        onClick={() => { this.handleBlockClick(index); }} 
                      />
            })} 
          </svg>
      </div>
    );
  }
}

export default Canvas;
