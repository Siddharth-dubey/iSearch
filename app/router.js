import React from 'react'
import {Router,Route,browserHistory} from 'react-router';

import HomeLayout from './components/HomeLayout';

export default (
	<Router history={browserHistory}>
		<Route>
			<Route path="/" component={HomeLayout}></Route>
		</Route>
	</Router>
);