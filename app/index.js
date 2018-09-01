import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './components';

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(<ThemeProvider><App /></ThemeProvider>, document.getElementById('root'));
