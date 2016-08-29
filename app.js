'use strict';
import ReactDOM from 'react-dom';
import App from './components/App';

if (typeof Promise === 'undefined') {
    require('babel-polyfill');
}

window.React = require('react');
var Select = require('react-select');

window.start = () => ReactDOM.render(<App />, document.querySelector('main'));
