import React from 'react'
import {Router,Route,browserHistory} from 'react-router';

import HomeLayout from './components/HomeLayout';
import SearchHeaderLayout from './components/SearchHeaderLayout';
import SearchHomeLayout from './components/SearchHomeLayout';

export default (
	<Router history={browserHistory}>
		<Route>
			<Route path="/isearch" component={HomeLayout}></Route>
			<Route path="/search" component={SearchHeaderLayout}>
				<Route path="home" component={SearchHomeLayout}/>
			</Route>
		</Route>
	</Router>
);