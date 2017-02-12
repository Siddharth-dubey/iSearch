import React from 'react'
import {Link} from 'react-router'


class ResultSingleItem extends React.Component{
	
	constructor(props){
		super(props);
	}

	// http://is2.mzstatic.com/image/thumb/Music3/v4/d9/a2/c6/d9a2c6e8-4a9f-139d-54d1-6cab11fafe84/source/100x100bb.jpg
	
	ImageUrlUpgrade(url){ //Enhancing to use images of higher resolution
		var index=url.lastIndexOf('/');
		return url.slice(0,index)+'/600x600bb.jpg'
	}


	// "http://video.itunes.apple.com/apple-assets-us-std-000001/Video49/v4/7a/8d/cf/7a8dcfcf-5526-cf38-ca77-7e3dd96ecee5/mzvf_91079852872296453.640x356.h264lc.D2.p.m4v"
	// "http://a119.phobos.apple.com/us/r30/Music/57/12/f4/mzm.qeklygxe.aac.p.m4a"
	checkMediaType(url){
			if(url.length!==0 & url.charAt(7)=='v'){return 'video'}
				else {return 'audio'}
	}

	render(){
		var data=this.props.data;
		var imageUrl=this.ImageUrlUpgrade(data.artworkUrl100);
		if(data.previewUrl){
		if(this.checkMediaType(data.previewUrl)=='video') {
			 // var previewUrl=<button disabled ><span className="fa fa-headphones"></span> No Preview</button>
		}
		else{
			var previewUrl=<button className="preview_button" onClick={()=>this.props.previewHandler(data.previewUrl)}><span className="fa fa-play"></span> </button>
		}
		}	
		// {previewUrl}
		// 	<button onClick={this.props.previewHandler(data.previewUrl)}>Play</button>
		// return (
		// 	<div className="result_list">
				
		// 		<div><img  className="img-responsive" style={{width:250,height:255}} src={imageUrl} /></div>
		// 		<div className="xResult_details">
		// 		<h4 className="truncate_string" title={data.trackName}>{data.trackName}</h4>
		// 		<h5 className="truncate_string" title={data.artistName}>{data.artistName}</h5>
		// 		<h5>Price: ${data.collectionPrice || data.price}</h5>
		// 		<h5><Link to="/"><span className="fa fa-info-circle"></span> More info</Link></h5>
		// 		{previewUrl}
		// 		</div>
		// 	</div>
		// )
		return(
			<div className="small-6 med-4 large-2">
				<div className="result_card">
					<img src={imageUrl} alt="" className="card_image" />
					<div className="result_card_info">
						<div className="main_info">
							<Link to={`/iSearch/search/query/${data.trackName}/all/`}>{data.trackName}</Link>
						</div>
						<div className="sub_info">
							<Link to={`/iSearch/search/query/${data.artistName}/all/`}><small>{data.artistName}</small></Link>
						</div>
						<div className="preview_button_wrap">
						{previewUrl}
						</div>	
					</div>
					<div className="card_imp_info clearfix">
							<div className="large-6 med-6 small-6 seperator">
								<div className="card_price">${data.collectionPrice || data.price}</div>	
							</div>
							<div className="large-6 med-6 small-6">
								<div className="itunes_link"><a target="_blank" href={data.trackViewUrl}><span className="fa fa-external-link"></span> iTunes</a></div>
							</div>
					</div>
						
				</div>
			</div>
		)
	}
	

}

export default ResultSingleItem;