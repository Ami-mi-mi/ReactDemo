import React, {Component} from 'react';
import { HashRouter , Route } from 'react-router-dom';

import Login from './views/login/login';
import Main from './views/main/main';

class App extends Component {
	render() {
		return (
			<HashRouter basename="/echo">
				<Route path='/login' component={Login}></Route>
				<Route path='/' component={Main}></Route>
			</HashRouter>
		);
	}
}
export default App;
