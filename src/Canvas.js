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
  constructor(props) {
    super(props);
    this.state = {
      tool: "block",
      arrowFrom: -1
    };
  };

  setTool = (tool) => {
    this.setState({
      tool: tool,
      arrowFrom: -1
    });          
  };

  handleBlockClick(index) {

    var event = {
      eventType: "block",
      index: index,
      indexTo: -1,
      x: 0,
      y: 0
    };
 
    if (this.state.tool === "block") {  
      this.props.update(event);
    } else {
      if (this.state.arrowFrom === -1) {
        this.setState({
          tool: this.state.tool,
          arrowFrom: index
        });          
      } else {
        event.eventType = "arrow";
        event.index = this.state.arrowFrom;
        event.indexTo = index;

        this.props.update(event);

        this.setState({
          tool: this.state.tool,
          arrowFrom: -1
        });          
      }
    }
  };

  handleCanvasClick = (e) => {
    if (this.state.tool === "block") {
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
    } else {
      this.setState({
        tool: this.state.tool,
        arrowFrom: -1
      });          
    }
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
          {
            this.state.arrowFrom > -1 && 
            <rect 
              x={this.props.diagram.blocks[this.state.arrowFrom].x-2} 
              y={this.props.diagram.blocks[this.state.arrowFrom].y-2} 
              width={this.props.diagram.blockWidth + 4} 
              height={this.props.diagram.blockHeight + 4} 
              stroke="red" fill="transparent" strokeWidth="2" /> 
          } 
          </svg>
      </div>
    );
  }
}

export default Canvas;
