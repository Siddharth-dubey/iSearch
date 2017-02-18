import React from 'react'
import {Link} from 'react-router'
import reqwest from 'reqwest'

import ResultSingleItem from './ResultSingleItem'
import AudioPreview from './AudioPreviewLayout'

class Results extends React.Component{

	constructor(props){
		super(props);
		this.state={result:[],audioSource:'',isFetching:true}
	}

	componentDidMount(){
		// console.log('New');
		var that=this
		reqwest({
			url:"https://itunes.apple.com/search?term="+this.props.data.query+"&media="+this.props.data.filter,
			type:'jsonp'
		}).then(response => that.setState({result:response.results,isFetching:false}))
		.fail(console.log)
		.always(()=>{console.log('Done')});
	}

	componentWillReceiveProps(nextProps){
		this.setState({isFetching:true})
		var that=this
		console.log(nextProps);
		console.log('props:'+nextProps.data);
		// if (nextProps!==this.props) {
		reqwest({
			url:"https://itunes.apple.com/search?term="+nextProps.data.query+"&media="+nextProps.data.filter,
			// url:"https://itunes.apple.com/us/rss/topsongs/limit=25/explicit=true/json",
			type:'jsonp'
		}).then(response => {console.log(response);that.setState({result:response.results,isFetching:false});})
		.fail(console.log)
		.always(()=>{console.log('Done')});	
		// }
		
	}


	audioPreviewHandler=(src)=>{
		this.setState({audioSource:src});
	}

	createList(items){
		console.log(items);
		var itemList=items.map((item,index)=><ResultSingleItem previewHandler={this.audioPreviewHandler} key={index} data={item}/>);
		return itemList;
	}

	render(){
		console.log('rendered')
		var items=((this.state.result.length!=0) && (this.state.isFetching==true) )?this.createList(this.state.result):'No resuls found';
		return (
			<div className="small-12 large-12">
				<span>Status:{this.state.isFetching==true?"Loading":"Done"}</span>
				<div className="featured_title">
					Results for <strong>{this.props.data.query}</strong>
				</div>
				<div className="search_result_list clearfix">
					{items}
				</div>
			<AudioPreview audioSource={this.state.audioSource} />
			</div>
		)
	}
}



export default Results;