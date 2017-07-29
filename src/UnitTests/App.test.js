import React from 'react';
import {shallow} from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const {App} = document.createElement('div');
  ReactDOM.render(<App />, div);
});