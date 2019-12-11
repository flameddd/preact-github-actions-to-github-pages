import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

let basename = ''

if (process.env.GITHUB_PAGES) {
  basename = `/${process.env.GITHUB_PAGES}`
}

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
    this.currentUrl = `${basename}${e.url}`;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
          <Home path={`${basename}/`} />
          <Profile path={`${basename}/profile/`} user="me" />
          <Profile path={`${basename}/profile/:user`} />
				</Router>
			</div>
		);
	}
}
