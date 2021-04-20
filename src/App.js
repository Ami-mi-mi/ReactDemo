import React, {Component} from 'react';
import { HashRouter , Route } from 'react-router-dom';

import Login from './views/login/login';
import Main from './views/main/main';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<Route path='/login' component={Login} exact></Route>
				<Route path='/' component={Main} exact></Route>
			</HashRouter>
		);
	}
}
export default App;
