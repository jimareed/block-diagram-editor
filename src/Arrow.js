import React, { Component } from 'react';

class Arrow extends Component {

  slope(x1, y1, x2, y2) {
    return (y2 - y1) / (x2 - x1);
  };

  calcP1(slope) {
    var x = 0;
    var y = 0;

    if (Math.abs(slope) <= this.slope(0,0,this.props.blockWidth,this.props.blockHeight)) {
      // right side
      if (this.props.p1.x < this.props.p2.x) {
        console.log("debug, slope=" + slope + " blockslope=" + this.slope(0,0,this.props.blockHeight,this.props.blockWidth));
        x = this.props.p1.x + this.props.blockWidth;
        y = this.props.p1.y + this.props.blockHeight / 2 + this.props.blockWidth / 2 * slope;
      }
      // left side
      else {
        x = this.props.p1.x;
        y = this.props.p1.y + this.props.blockHeight / 2 - this.props.blockWidth / 2 * slope;
      }
    } else {
      // top side
      if (this.props.p1.y > this.props.p2.y) {
        x = this.props.p1.x + this.props.blockWidth / 2 - (this.props.blockHeight / 2) / slope;
        y = this.props.p1.y;
      }
      // botton side
      else {
        x = this.props.p1.x + this.props.blockWidth / 2 + (this.props.blockHeight / 2) / slope;
        y = this.props.p1.y + this.props.blockHeight;
      }
    }

    return ({
      x: x,
      y: y
    })
  };

  calcP2(slope) {
    var x = 0;
    var y = 0;

    if (Math.abs(slope) <= this.slope(0,0,this.props.blockWidth,this.props.blockHeight)) {
      // right side
      if (this.props.p1.x < this.props.p2.x) {
        x = this.props.p2.x -20;
        y = this.props.p2.y + this.props.blockHeight / 2 - this.props.blockWidth / 2 * slope;
      }
      // left side
      else {
        x = this.props.p2.x + this.props.blockWidth + 20;
        y = this.props.p2.y + this.props.blockHeight / 2 + this.props.blockWidth / 2 * slope;
      }
    } else {
      // top side
      if (this.props.p1.y > this.props.p2.y) {
        x = this.props.p2.x + this.props.blockWidth / 2 + (this.props.blockHeight / 2) / slope;
        y = this.props.p2.y + this.props.blockHeight + 20;
      }
      // botton side
      else {
        x = this.props.p2.x + this.props.blockWidth / 2 - (this.props.blockHeight / 2) / slope;
        y = this.props.p2.y - 20;
      }
    }

    return ({
      x: x,
      y: y
    })
  };

  render() {
    var slope = this.slope(this.props.p1.x, this.props.p1.y, this.props.p2.x, this.props.p2.y);

    var p1 = this.calcP1(slope);
    var p2 = this.calcP2(slope);

    return (
        <>
          <defs>
            <marker id="arrowhead" markerWidth="5" markerHeight="3.5" refX="0" refY="1.75" orient="auto">
              <polygon points="0 0, 5 1.75 0 3.5" />
            </marker>
          </defs>
          <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="black" strokeWidth="4" marker-end="url(#arrowhead)" />
        </>
    )
  }
}

export default Arrow;
