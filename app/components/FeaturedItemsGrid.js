import React from 'react'

import SingleFeaturedItem from './SingleFeaturedItem'

class FeaturedItemsGrid extends React.Component{

	constructor(props){
		super(props);
	}

	makeList(data){
		console.log('adin');
		var finalList=data.map((item,index)=><SingleFeaturedItem data={item} key={index} />)
		return finalList;
	}

	render(){
		var data=this.props.data;
		var title=data.title.label.slice(14);
		var list=this.makeList(data.entry);
		console.log(data.entry);
		return (
			<div className="featured_row">
				<div className="featured_title">
							<span>{title}</span>
				</div>
				<div className="featured_list clearfix">
					{list}
				</div>
			</div>
		)
	}
}

export default FeaturedItemsGrid;
// 	<div className="featured_row">
// 						<div className="featured_title">
// 							<span>Top Albums</span>
// 						</div>
// 						<div className="featured_list clearfix">
// 							<div className="small-6 med-4 large-2">
// 								<div className="featured_card">
// 									<img className="card_image" src="./public/images/f1.jpg" />
// 									<div className="featured_card_info">
// 										<div className="main_info">
// 											<a href="#">Moana</a>
// 										</div>
// 										<div className="sub_info">
// 											<a href="#">
// 												<small>Disney</small>
// 											</a>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="small-6 med-4 large-2">
// 								<div className="featured_card">
// 									<img className="card_image" src="./public/images/f1.jpg" />
// 									<div className="featured_card_info">
// 										<div className="main_info">
// 											<a href="#">Moana</a>
// 										</div>
// 										<div className="sub_info">
// 											<a href="#">
// 												<small>Disney</small>
// 											</a>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="small-6 med-4 large-2">
// 								<div className="featured_card">
// 									<img className="card_image" src="./public/images/f1.jpg" />
// 									<div className="featured_card_info">
// 										<div className="main_info">
// 											<a href="#">Moana</a>
// 										</div>
// 										<div className="sub_info">
// 											<a href="#">
// 												<small>Disney</small>
// 											</a>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="small-6 med-4 large-2">
// 								<div className="featured_card">
// 									<img className="card_image" src="./public/images/f1.jpg" />
// 									<div className="featured_card_info">
// 										<div className="main_info">
// 											<a href="#">Moana</a>
// 										</div>
// 										<div className="sub_info">
// 											<a href="#">
// 												<small>Disney</small>
// 											</a>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="small-6 med-4 large-2">
// 								<div className="featured_card">
// 									<img className="card_image" src="./public/images/f1.jpg" />
// 									<div className="featured_card_info">
// 										<div className="main_info">
// 											<a href="#">Moana</a>
// 										</div>
// 										<div className="sub_info">
// 											<a href="#">
// 												<small>Disney</small>
// 											</a>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="small-6 med-4 large-2">
// 								<div className="featured_card">
// 									<img className="card_image" src="./public/images/f1.jpg" />
// 									<div className="featured_card_info">
// 										<div className="main_info">
// 											<a href="#">Moana</a>
// 										</div>
// 										<div className="sub_info">
// 											<a href="#">
// 												<small>Disney</small>
// 											</a>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 	}

// }