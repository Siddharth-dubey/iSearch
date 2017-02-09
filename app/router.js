import React from 'react'
import {Router,Route,browserHistory} from 'react-router';

import HomeLayout from './components/HomeLayout';
import SearchHeaderLayout from './components/SearchHeaderLayout';
import SearchHomeLayout from './components/SearchHomeLayout';
import BestOfLayout from './components/BestOfLayout';

export default (
	<Router history={browserHistory}>
		<Route>
			<Route path="/iSearch" component={HomeLayout}></Route>
			<Route path="/iSearch/search" component={SearchHeaderLayout}>
				<Route path="home" component={SearchHomeLayout}/>
				<Route path="BestOff/:item" component={BestOfLayout}/>
			</Route>
		</Route>
	</Router>
);