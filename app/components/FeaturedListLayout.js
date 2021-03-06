import React from 'react'
import reqwest from 'reqwest'


import FeaturedRowLayout from './FeaturedRowLayout'

class FeaturedListLayout extends React.Component{
	
	constructor(){
			super();
			this.state={urlsData:[]};
	}


	getJson(url){
		return new Promise(function(resolve,reject){
			var req=new XMLHttpRequest();
			req.open('GET',url);
			req.onload=function(){
				if (req.status==200) {
					resolve(req.response)
				}
				else{
					reject(Error(req.statusText));
				}
			}
			req.onError=function(){
				  reject(Error('Network Error'));
			}
			req.send();
		})
	};

	getAllJson(urls){
		return Promise.all(urls.map((item)=>this.getJson(item.url)));
	}

	FetchFeaturedData(){
		return {
			urls:[
				{'title':'Top Songs','url':'https://itunes.apple.com/us/rss/topsongs/limit=6/explicit=true/json'},
				{'title':'Top Free Movies','url':'https://itunes.apple.com/us/rss/topmovies/limit=6/json'},
				{'title':'Top Free Mac Apps','url':'https://itunes.apple.com/us/rss/topfreemacapps/limit=6/json'},
				{'title':'Top Free Books','url':'https://itunes.apple.com/us/rss/topfreeebooks/limit=6/json'}
			]
		}
	}


	getData(){
		var that=this;
		if(!this.props.type){
			var list=this.FetchFeaturedData();
			this.getAllJson(list.urls).then((results)=>{
			console.log(results);
			that.setState({urlsData:results})
			});
		}
		else if(this.props.type=="apps"){
			var list=this.getJson('https://itunes.apple.com/us/rss/topgrossingapplications/limit=48/json').then((result)=>{
				that.setState({urlsData:[result]});
			});
		}
		else if(this.props.type=="movies"){
			var list=this.getJson('https://itunes.apple.com/us/rss/topmovies/limit=48/json').then((result)=>{
				that.setState({urlsData:[result]});
			});
		}
		else if(this.props.type=="music"){
			var list=this.getJson('https://itunes.apple.com/us/rss/topsongs/limit=48/explicit=true/json').then((result)=>{
				that.setState({urlsData:[result]});
			});
		}
		else if(this.props.type=="podcast"){
			var list=this.getJson('https://itunes.apple.com/us/rss/toppodcasts/limit=48/explicit=true/json').then((result)=>{
				that.setState({urlsData:[result]});
			});
		}
	}

	// componentDidMount(){
	// 	var that=this;
	// 	var items;
	// 	var list=this.FetchFeaturedData();
	// 	this.getAllJson(list.urls).then((results)=>{
	// 		console.log(results);
	// 		that.setState({urlsData:results})
	// 	});
	// }

	render(){
		console.log('Rendering FeatureList');
		var finalList=[];

		if(this.state.urlsData.length!==0){
			finalList=this.state.urlsData.map((item,index)=> <FeaturedRowLayout key={index} title={item} data={item} />);
			return (
				<div>
					{finalList}
				</div>
			)
		}
		else{
			console.log('HEREEEEEE');
			this.getData();
			return (
			<div className="quotes">
				Great things come out of patience		
			</div>
		)	
		}
			
	}
}

export default FeaturedListLayout;