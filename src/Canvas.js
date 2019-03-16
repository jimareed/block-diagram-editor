import React, { Component } from 'react';
import './Canvas.css';

class Canvas extends Component {
  render() {
    return (
      <div className="Canvas">
        <svg width="100%" height="100%" align="center">
        <rect x="40" y="40" width="30" height="20" stroke="black" fill="transparent" strokeWidth="5" />
        </svg>
      </div>
    );
  }
}

export default Canvas;
