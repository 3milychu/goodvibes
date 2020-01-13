import React from 'react'

class Instructions extends React.Component {
	render() {
		return(
			<div className='instructions'>
			<p>{this.props.text}</p>
			</div>

			)
	}
}

export default Instructions