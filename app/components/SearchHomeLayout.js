import React from 'react'
import {Link,browserHistory} from 'react-router'

//feature List
import FeaturedListLayout from './FeaturedListLayout'

class SearchHomeLayout extends React.Component{

	componentDidMount(){
		console.log('22');
	}

	render(){
		return (
			<div className="searchHome_container">
			<div className="selected_list_wrap clearfix">
				<div className="large-3 small-6">
					<div className="selected_list_card">
						<img src="/iSearch/public/images/x1.jpg" className="card_image" />
						<div className="card_overlay">
							<Link to="/iSearch/search/BestOff/apps" className="card_link">
								<span className="card_text">Best of Apps</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="large-3 small-6">
					<div className="selected_list_card">
						<img src="/iSearch/public/images/x5.jpg" className="card_image" />
						<div className="card_overlay">
							<Link to="/iSearch/search/BestOff/movies" className="card_link">
								<span className="card_text">Best of Movies</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="large-3 small-6">
					<div className="selected_list_card">
						<img src="/iSearch/public/images/x7.jpg" className="card_image" />
						<div className="card_overlay">
							<Link to="/iSearch/search/BestOff/music" className="card_link">
								<span className="card_text">Best of Music</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="large-3 small-6">
					<div className="selected_list_card">
						<img src="/iSearch/public/images/x6	.jpg" className="card_image" />
						<div className="card_overlay">
							<Link to="/iSearch/search/BestOff/podcast" className="card_link">
								<span className="card_text">Best of Podcast</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<FeaturedListLayout/>
		<footer className="searchpage_footer">
					<div className="s_footer_note">
						A <a target="_blank" href="https://github.com/Siddharth-dubey/iSearch">open Source</a> project made with <span className="fa fa-heart"></span>  by <a target="_blank" href="https://github.com/Siddharth-dubey">Siddharth Dubey</a>. All Apple logos,name &amp; iTunes are part of Apple Inc.
					</div>
		</footer>
		
		</div>
		)
	}

}

export default SearchHomeLayout;