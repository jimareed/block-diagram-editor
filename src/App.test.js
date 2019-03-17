import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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
  ReactDOM.render(<App diagram={diagram} update={update} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
