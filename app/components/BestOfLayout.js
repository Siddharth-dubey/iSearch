import React from 'react'
import {browserHistory,Link} from 'react-router'

import FeaturedListLayout from './FeaturedListLayout'

class BestOfLayout extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return (
			<FeaturedListLayout type={this.props.params.item} />
		)
	}

}

export default BestOfLayout;