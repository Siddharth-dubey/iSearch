import React from 'react'
import {Link} from 'react-router'

class HomeLayout extends React.Component{


render (){
	return (
<div className="homepage_container">
			<div className="fullscreen_background"></div>
			<div className="homepage_content">
				<header>
					<div className="homepage_header">
						<div className="header_title">
						<span className="fa fa-apple"></span>	iSearch
						</div>			
					</div>
				</header>
				<div className="homepage_body">
					<div className="homepage_body_title"><span className="fa fa-apple"></span> iSearch</div>
					<div className="homepage_body_info_wrap">
						<div className="homepage_body_text">
							A beautiful tool for iTunes search.<br />Built into your browser.
						</div>
						<div className="homepage_body_subtext">
							Look up for the Artists,songs and apps that you would enjoy in your device
						</div>
						<div className="start_button">
							
							<Link to="/iSearch/search/home">Start searching	</Link>
						</div>
					</div>
				</div>
				<footer className="footer_wrap">
					<div className="footer_note">
						A open Source project made with <span className="fa fa-heart"></span>  by <a href="#">Siddharth Dubey</a>. All Apple logos,name &amp; iTunes are part of Apple Inc.
					</div>
				</footer>
			</div>
		</div>
		)}
}
// <Link to="/search/home">Start searching	</Link>
// <Link to="/iSearch/search/home">Start searching	</Link>
export default HomeLayout;
