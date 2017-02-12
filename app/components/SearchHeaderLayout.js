import React from 'react'
import {browserHistory,Link} from 'react-router'

class SearchHeaderLayout extends React.Component{

	constructor(props){
		super(props);
		this.state={filter:'all',value:''}
	}

	componentDidMount(){
		console.log('search Header');
	}

	handleSubmit=(e)=>{
		e.preventDefault();
		console.log(this.state.value);
		browserHistory.push('/iSearch/search/query/'+this.state.value+'/'+this.state.filter);
	}

	handleChange=(e)=>{
		console.log('Changed');
		this.setState({value:e.target.value})

	}

	handleFilterChange=(e)=>{
		console.log('FIlter Changed :' + e.target.value);
		browserHistory.push('/iSearch/search/query/'+this.state.value+'/'+e.target.value);
	}

	render (){
		// var showFilter=(this.state.value.length!=0)?'block':'none';
		var showFilter={display: (this.state.value.length!=0)?'block':'none'};
	return (
		<div>
<div className="searchpageHeader_container">
			<header>
				<div className="searchpage_header">
					<div className="small-4 large-3">
						<div className="searchpage_header_title">
							<Link to="/iSearch"><span className="fa fa-apple"></span> iSearch</Link>
						</div>
					</div>
					<div className="small-8 large-6">
						<div className="searchpage_header_input_wrap">
							<form onSubmit={this.handleSubmit}>
							<input className="searhpage_header_inp_box" type="text" id="searchQuery" name="searchQuery" onChange={this.handleChange} placeholder="Type something" />
							<button className="searchpage_header_search_btn" type="submit" ><span className="fa fa-search"></span></button>
							</form>
						</div>
					</div>
					
				</div>
				<div className="filter_search_wrap" style={showFilter}>
				Filter:
	 				<input type="radio" id="radio1" name="radios" onChange={this.handleFilterChange} checked={this.state.filter==''} value="all" />
	       			<label htmlFor="radio1"><span className="fa fa-globe"></span> All</label>
	       			<input type="radio" id="radio2" name="radios" onChange={this.handleFilterChange} checked={this.state.filter=='Apps'} value="music" />
	       			<label htmlFor="radio2"><span className="fa fa-music"></span> Music</label>
	       			<input type="radio" id="radio3" name="radios" onChange={this.handleFilterChange} checked={this.state.filter=='Movies'} value="movie" />
	       			<label htmlFor="radio3"><span className="fa fa-film"></span> Movies</label>
	       			<input type="radio" id="radio4" name="radios" onChange={this.handleFilterChange} checked={this.state.filter=='software'} value="software" />
	       			<label htmlFor="radio4"><span className="fa fa-laptop"></span> Apps</label>
	       			<input type="radio" id="radio5" name="radios" onChange={this.handleFilterChange} checked={this.state.filter=='podcast'} value="podcast" />
	       			<label htmlFor="radio5"><span className="fa fa-podcast"></span> Podcasts</label>
				</div>
			</header>
		</div>
			{this.props.children}
		</div>
		)
}
};

export default SearchHeaderLayout;