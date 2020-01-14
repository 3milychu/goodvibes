import React from 'react'

class LevelUp extends React.Component {
	render() {
		return(
			<React.Fragment>
			<div className='lightbox'></div>
			<div className='popup'>
				<div className="aligner">
					<p>Level unlocked!</p>
					<h1>{this.props.current_badge}</h1>
					<p>Next level: <em>{this.props.next_badge}</em></p>
					<div className="continue">Keep it going!</div>
				</div>
			</div>
			</React.Fragment>
			)
	}
}

export default LevelUp
