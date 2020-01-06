import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Aligner from './components/Aligner'
import Card from './components/Card'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Aligner />, document.getElementById('root'));

let card = document.querySelector('.card')
console.log(card)
card.onclick=function() {
	console.log('hello')
	ReactDOM.render(<Card />, document.querySelector('.aligner'))
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
