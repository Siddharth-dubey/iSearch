import React from 'react'

class AudioPreview extends React.Component{
	
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="audio_wrap">
				<audio preload="true" autoPlay controls src={this.props.audioSource} type="audio/mp4"></audio>
			</div>
		)
	}

}

export default AudioPreview;