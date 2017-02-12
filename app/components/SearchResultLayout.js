import React from 'react'

import SearchResultList from './SearchResultList'


class SearchResultLayout extends React.Component{



	constructor(){
		super();
		// this.state={result:[]}
	}

	render(){
		return (
			<div className="searchHome_container clearfix">
				<SearchResultList  data={this.props.params} />
			</div>
		)
	}
}



export default SearchResultLayout;
