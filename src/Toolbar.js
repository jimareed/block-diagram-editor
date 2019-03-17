import React, { Component } from 'react';
import './Toolbar.css';

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "block"
    };
  }

  handleClick = (selected) => {
    this.setState({
      selected: selected
    });        

    this.props.update(selected);
  }

  renderSelected() {
    return (
      <rect x="0" y="0" width="50" height="40" stroke="red" fill="transparent" strokeDasharray="2" strokeWidth="2" />
    )
  }

  renderBlockButton() {
    return (
          <svg width="50" height="40">
            {this.state.selected === "block" && this.renderSelected()}
            <rect x="10" y="10" width="30" height="20" stroke="black" fill="transparent" strokeWidth="5" />
          </svg>
    )
  }

  renderArrowButton() {
    return (
          <svg width="50" height="40">
            {this.state.selected === "arrow" && this.renderSelected()}
            <line x1="10" y1="25" x2="40" y2="15" stroke="black" strokeWidth="4" />
            <line x1="28" y1="13" x2="39" y2="15" stroke="black" strokeWidth="4" />
            <line x1="32" y1="25" x2="39" y2="15" stroke="black" strokeWidth="4" />
          </svg>
    )
  }
  
  render() {
    return (
      <div className="Toolbar">
        <div className="btn-group" width="100%">
          <button onClick={() => { this.handleClick("block"); }}>
            {this.renderBlockButton()}
          </button>
        </div>
        <p />
        <div className="btn-group" width="100%">
          <button onClick={() => { this.handleClick("arrow"); }}>
            {this.renderArrowButton()}
          </button>
        </div>
      </div>
    );
  }
}

export default Toolbar;
