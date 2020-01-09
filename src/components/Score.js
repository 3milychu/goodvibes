import React from 'react'

class Score extends React.Component {
	render() {
		return(
			<div class='score'>
			<h2>{this.props.score}</h2>
		</div>
			)
		
	}
}

export default Score