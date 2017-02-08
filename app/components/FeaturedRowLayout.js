import React from 'react'

//feature List items
import FeaturedItemsGrid from './FeaturedItemsGrid'

class FeaturedRowLayout extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		var data=JSON.parse(this.props.title).feed;
		// console.log(JSON.parse(this.props.title).feed.title.label)
			//<div>
			//	<h2>{data.title.label}</h2>
			//	<h4>{data.entry[0].title.label}</h4>
			//</div>
		return(
			<div className="featured_items_wrap clearfix">
				<div className="small-12 large-12">
					<FeaturedItemsGrid data={data} />
				</div>
			</div>
		)
	}
}






// <div className="featured_items_wrap clearfix">
// 				<div className="small-12 large-12">
// 					<div className="featured_row">
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

// 				</div>
// 			</div>

export default FeaturedRowLayout;