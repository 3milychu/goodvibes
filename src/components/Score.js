import React from 'react'

class Score extends React.Component {
	render() {
		return(
			<div className='score'>
			<h2 id='counter'>{this.props.score}</h2>
			<h2>pts</h2>
		</div>
			)
		
	}
}

export default Score