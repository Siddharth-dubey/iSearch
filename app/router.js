import React from 'react'
import {Router,Route,browserHistory} from 'react-router';

import HomeLayout from './components/HomeLayout';

export default (
	<Router history={browserHistory}>
		<Route>
			<Route path="/iSearch" component={HomeLayout}></Route>
		</Route>
	</Router>
);