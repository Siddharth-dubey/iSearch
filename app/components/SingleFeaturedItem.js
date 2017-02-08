import React from 'react'


class SingleFeaturedItem extends React.Component{

	constructor(props){
		super(props);
	}

	ImageUrlUpgrade(url){ //Enhancing to use images of higher resolution
		var index=url.lastIndexOf('/');
		return url.slice(0,index)+'/600x600bb.jpg'
	}

	render(){
		console.log('awdawd');
		var data=this.props.data;
		var img_src=this.ImageUrlUpgrade(data['im:image'][0].label);
		return (
		<div className="small-6 med-4 large-2">
			<div className="featured_card">
				<img className="card_image" src= {img_src}/>
				<div className="featured_card_info">
					<div className="main_info">
						<a href="#">{data['im:name'].label}</a>
					</div>
					<div className="sub_info">
						<a href="#">
							<small>Disney</small>
						</a>
					</div>
				</div>
			</div>
		</div>
		)
	}

}
export default SingleFeaturedItem;