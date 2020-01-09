import React from 'react'

class Logo extends React.Component {
	render() {
		return(
			<div className='logo'>
				<h1>{this.props.name}</h1>
			</div>
			)
	}

}

export default Logo
