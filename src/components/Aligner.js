import React from 'react'
import { Card, CardWrapper } from 'react-swipeable-cards';
import SwipeCard from './Swipe-Card'
import Instructions from './Instructions'

class Aligner extends React.Component {
	render() {
		return(
		<div className='aligner'>
			<SwipeCard />
		</div>
			)

	}
}
export default Aligner