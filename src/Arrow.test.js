import React from 'react';
import ReactDOM from 'react-dom';
import Arrow from './Arrow';

it('renders without crashing', () => {
  var p1 = { x:0, y:0};
  var p2 = { x:0, y:0};
  var blockWidth = 30;
  var blockHeight = 20;

  const div = document.createElement('div');
  ReactDOM.render(<Arrow p1={p1} p2={p2} blockWidth={blockWidth} blockHeight={blockHeight} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('works when blocks are side by side', () => {
  var p1 = { x:0, y:0};
  var p2 = { x:0, y:20};
  var blockWidth = 10;
  var blockHeight = 10;

  const div = document.createElement('div');
  ReactDOM.render(<Arrow p1={p1} p2={p2} blockWidth={blockWidth} blockHeight={blockHeight} />, div);

//  Arrow.calcP1()
//  expect(Arrow.calcP1().x).toBeEqual(4);

  ReactDOM.unmountComponentAtNode(div);
});

