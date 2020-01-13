import React from 'react'

class Instructions extends React.Component {
	render() {
		return(
			<div className='instructions'>
			<p>{this.props.text}</p>
			<p>Made with ❤️ By <a href="https://3milychu.github.io" target="_blank">emily chu</a></p>
			</div>

			)
	}
}

export default Instructions