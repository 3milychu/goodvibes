import React from 'react'

class Instructions extends React.Component {
	render() {
		return(
			<div className='instructions'>
			<div className='game_status'>
				<div className="current">Current badge: {this.props.current_badge}</div>
				<div className="next">Next badge: {this.props.next_badge}</div>
			</div>
			<p>{this.props.text}</p>
			<p>Made in React with ❤️ By <a href="https://3milychu.github.io" target="_blank">emily chu</a></p>
			</div>

			)
	}
}

export default Instructions