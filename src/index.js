/* eslint-disable react/prop-types */

import React from 'react';
import ReactDOM from 'react-dom';

// router
import { BrowserRouter as Router } from 'react-router-dom';

import TodoContainer from './Components/TodoContainer';
import './App.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);