import React, { Component } from 'react';

class Arrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slope: this.slope(props.p1.x, props.p1.y, props.p2.x, props.p2.y)
    };
  };

  slope(x1, y1, x2, y2) {
    return (y2 - y1) / (x2 - x1);
  };

  calcP1() {
    var x = 0;
    var y = 0;

    if (Math.abs(this.state.slope) <= this.slope(0,0,this.props.blockWidth,this.props.blockHeight)) {
      // right side
      if (this.props.p1.x < this.props.p2.x) {
        console.log("debug, slope=" + this.state.slope + " blockslope=" + this.slope(0,0,this.props.blockHeight,this.props.blockWidth));
        x = this.props.p1.x + this.props.blockWidth;
        y = this.props.p1.y + this.props.blockHeight / 2 + this.props.blockWidth / 2 * this.state.slope;
      }
      // left side
      else {
        x = this.props.p1.x;
        y = this.props.p1.y + this.props.blockHeight / 2 - this.props.blockWidth / 2 * this.state.slope;
      }
    } else {
      // top side
      if (this.props.p1.y > this.props.p2.y) {
        x = this.props.p1.x + this.props.blockWidth / 2 - (this.props.blockHeight / 2) / this.state.slope;
        y = this.props.p1.y;
      }
      // botton side
      else {
        x = this.props.p1.x + this.props.blockWidth / 2 + (this.props.blockHeight / 2) / this.state.slope;
        y = this.props.p1.y + this.props.blockHeight;
      }
    }

    return ({
      x: x,
      y: y
    })
  };

  calcP2() {
    var x = 0;
    var y = 0;

    if (Math.abs(this.state.slope) <= this.slope(0,0,this.props.blockWidth,this.props.blockHeight)) {
      // right side
      if (this.props.p1.x < this.props.p2.x) {
        x = this.props.p2.x;
        y = this.props.p2.y + this.props.blockHeight / 2 - this.props.blockWidth / 2 * this.state.slope;
      }
      // left side
      else {
        x = this.props.p2.x + this.props.blockWidth;
        y = this.props.p2.y + this.props.blockHeight / 2 + this.props.blockWidth / 2 * this.state.slope;
      }
    } else {
      // top side
      if (this.props.p1.y > this.props.p2.y) {
        x = this.props.p2.x + this.props.blockWidth / 2 + (this.props.blockHeight / 2) / this.state.slope;
        y = this.props.p2.y + this.props.blockHeight;
      }
      // botton side
      else {
        x = this.props.p2.x + this.props.blockWidth / 2 - (this.props.blockHeight / 2) / this.state.slope;
        y = this.props.p2.y;
      }
    }

    return ({
      x: x,
      y: y
    })
  };

  render() {

    var p1 = this.calcP1();
    var p2 = this.calcP2();

    return (
      <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="black" strokeWidth="4" />
    )
  }
}

export default Arrow;
