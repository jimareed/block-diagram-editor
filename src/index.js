import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Rectangle(x,y) {
    this.x = x;
    this.y = y;
};

function Connector(i1,i2) {
    this.i1 = i1;
    this.i2 = i2;
};

var diagram = {
    blocks: [], 
    connectors: [],
    blockWidth: 90,
    blockHeight: 60 
};

diagram.blocks.push(new Rectangle(40,110));
diagram.blocks.push(new Rectangle(220,40));
diagram.blocks.push(new Rectangle(380,140));

function update(e) {

    if (e.eventType === "block") {
        if (e.index >= 0 && e.index < diagram.blocks.length) {
            diagram.blocks.splice(e.index,1);
        }

    } else if (e.eventType === "canvas") {
        var x = e.x - diagram.blockWidth / 2;
        if (x < 0) {
          x = 0;
        }
        var y = e.y - diagram.blockHeight / 2;
        if (y < 0) {
          y = 0;
        }

        diagram.blocks.push(new Rectangle(x,y));

    } else if (e.eventType === "arrow") {
        diagram.connectors.push(new Connector(e.index,e.indexTo));
    }

    render();
};

const render = () =>  {
    ReactDOM.render(<App diagram={diagram} update={update} />, document.getElementById('root'));
} 

render();

serviceWorker.unregister();
