import React from 'react';
import ReactDOM from 'react-dom';
import Canvas from './Canvas';

it('renders without crashing', () => {
  var diagram = {
    blocks: [], 
    connectors: [],
    blockWidth: 90,
    blockHeight: 60 
  };

  function update() {

  };

  const div = document.createElement('div');
  ReactDOM.render(<Canvas diagram={diagram} update={update} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
