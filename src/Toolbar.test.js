import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Toolbar';

it('renders without crashing', () => {

  function update() {

  };

  const div = document.createElement('div');
  ReactDOM.render(<Toolbar update={update} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
