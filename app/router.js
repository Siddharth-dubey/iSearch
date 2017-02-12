import React from 'react'
import {Router,Route,browserHistory} from 'react-router';

import HomeLayout from './components/HomeLayout';
import SearchHeaderLayout from './components/SearchHeaderLayout';
import SearchHomeLayout from './components/SearchHomeLayout';
import BestOfLayout from './components/BestOfLayout';
import SearchResultLayout from './components/SearchResultLayout';

export default (
	<Router history={browserHistory}>
		<Route>
			<Route path="/" component={HomeLayout}></Route>
			<Route path="/search" component={SearchHeaderLayout}>
				<Route path="home" component={SearchHomeLayout}/>
				<Route path="BestOff/:item" component={BestOfLayout}/>
				<Route path="query/:query/:filter" component={SearchResultLayout}/>
			</Route>
		</Route>
	</Router>
);