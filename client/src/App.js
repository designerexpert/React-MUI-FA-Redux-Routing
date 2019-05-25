import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/MaterialUi/Navigation';
import AppStore from './pages/AppStore';
import NewAppForm from './pages/NewAppForm';

import { connect } from 'react-redux';
import { userAuth } from './actions';
import axios from 'axios';
import 'typeface-lato';

class App extends Component {
	componentDidMount() {
		this.props.userAuth();
	}

	render() {
		return (
			<React.Fragment>
				<BrowserRouter>
					<Navigation>
						<Route path="/" exact component={AppStore} />
						<Route path="/new-app" exact component={NewAppForm} />
					</Navigation>
				</BrowserRouter>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		state
	};
};

export default connect(mapStateToProps, { userAuth })(App);
