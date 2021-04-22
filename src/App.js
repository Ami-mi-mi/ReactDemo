import React, {Component} from 'react';
import { HashRouter , Route, Switch } from 'react-router-dom';
import PrivateRoute from '@Router/PrivateRoute';

import '@Styles/common.css';

import Login from './views/login/login';
import Main from './views/main/main';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route path='/login' component={Login} />
					<PrivateRoute path='/' component={Main} />
				</Switch>
			</HashRouter>
		);
	}
}
export default App;
