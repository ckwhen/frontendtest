import './layout.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ToDoBox from './components/ToDoBox/';

ReactDOM.render(
  <div className="wrapper">
    <ToDoBox />
  </div>,
  document.getElementById('root')
);