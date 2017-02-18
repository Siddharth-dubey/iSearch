import React from 'react'
import{Link} from 'react-router'

class NotFoundLayout extends React.Component{
	

	render(){
		return (
			<div className="audio_wrap">
				Uh OH! . Seems like there is nothing here!
				<Link to="/iSearch">Go Back.</Link>
			</div>
		)
	}

}

export default AudioPreview;