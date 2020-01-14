import React from 'react'
import SwipeCard from './Swipe-Card'

class Aligner extends React.Component {
	render() {
		return(
		<div className='aligner'>
			<SwipeCard />
			<canvas id="confetti"></canvas>
		</div>
			)

	}
}
export default Aligner