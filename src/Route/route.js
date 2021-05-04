import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from "../components/signin/signin.js"
import Welcome from "../components/welcome/welcome.js"

class Routes extends Component {
	state = {};
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" component={Signin} exact />
					<Route path="/welcome" component={Welcome} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Routes;
