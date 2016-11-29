import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import Index from 'component/index/index';
import Shop from 'component/shop/shop';
import User from 'component/user/user';
import IndexPage from 'component/IndexPage';

class Routes extends React.Component{
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={IndexPage}>
					<IndexRoute component={Index} />
					<Route path='/shop' component={Shop} />
					<Route path='/user' component={User} />
				</Route>
			</Router>
		)
	}
};

export default Routes;
