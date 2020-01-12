import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Aligner from './components/Aligner'
// import Card from './components/Card'
import Logo from './components/Logo'
import * as serviceWorker from './serviceWorker';
import { Card, CardWrapper } from 'react-swipeable-cards';
import SwipeCard from './components/Swipe-Card'

 

ReactDOM.render(
	<div>
	<Logo name="Good Vibes" />
	<Aligner />
	</div>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
