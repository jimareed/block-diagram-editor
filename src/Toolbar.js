import React, { Component } from 'react';
import './Toolbar.css';

class Toolbar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        buttonState: ["primary","secondary"]
      };
    
      this.componentParent = null;
    }

    setComponentParent(parent) {
      this.componentParent = parent;
    }
    
    getMode() {
      if (this.state.buttonState[1] === "primary") {
        return "arrow";
      } else {
        return "block";
      }
    }
    
    handleClick = (e) => {
      if (this.state.buttonState[0] === "primary") {
        this.setState({
          buttonState: ["secondary","primary"]
        });        
      } else {
        this.setState({
          buttonState: ["primary","secondary"]
        });        
      }
    }

    handleInfoClick = () => {
      if (this.componentParent != null) {
        this.componentParent.showInfo();
      }
    }
    
    render() {
    return (
      <div className="Toolbar">
        <div class="btn-group" width="100%">
          <button>
            <svg width="30" height="20">
              <rect x="0" y="0" width="30" height="20" stroke="black" fill="transparent" strokeWidth="5" />
            </svg>
          </button>
        </div>
        <p />
        <div class="btn-group" width="100%">
          <button>
            <svg width="30" height="20">
              <line x1="0" y1="15" x2="30" y2="5" stroke="black" strokeWidth="4" />
              <line x1="18" y1="3" x2="29" y2="5" stroke="black" strokeWidth="4" />
              <line x1="22" y1="15" x2="29" y2="5" stroke="black" strokeWidth="4" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

/*



render() {

  return (
    <ButtonGroup vertical>
      <Button onClick={ this.handleClick } bsStyle={this.state.buttonState[0]}><IconBlock/></Button>
      <Button onClick={ this.handleClick } bsStyle={this.state.buttonState[1]}><IconArrow/></Button>
      <Button bsStyle="secondary"><Spacer/></Button>
      <Button onClick={ this.handleInfoClick } bsStyle="secondary"><IconInfo/></Button>
    </ButtonGroup>
  );
}

}
*/

export default Toolbar;
