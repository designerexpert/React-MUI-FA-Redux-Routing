import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FontAwesome from './components/FontAwesome/FontAwesome';
import MaterialUi from './components/MaterialUi/MaterialUi';
import Navigation from './components/MaterialUi/Navigation';
import MuiForms from './components/MaterialUi/MuiForms';
import MuiTables from './components/MaterialUi/MuiTables';
import Charts from './components/Charts/Charts';
import Sandbox from './components/Frames/Sandbox';
import Github from './components/Frames/Github';
import RuleManager from './pages/RuleManager';
import ExtractManager from './pages/ExtractManager';
import { connect } from 'react-redux';
import { userAuth } from './actions';
import axios from 'axios';
import 'typeface-lato';
import './App.css';

class App extends Component {
	componentDidMount() {
		this.validateToken();
	}

	validateToken = () => {
		const localToken = localStorage.getItem('token');
		if (localToken) {
			// If a token exists on Localstorage
			// Validate it
			axios
				.get('/local-api/auth', { headers: { Authorization: localToken } })
				.then((authResponse) => {
					const userPayload = authResponse.data;
					console.log('AUTH RESPONSE', userPayload);
					this.props.userAuth(userPayload);
				})
				.catch((authErr) => {
					// If Authentication Fails, Attempt to Retrieve a New Token
					// Typically we would ask the user to log in again at this point...
					console.log('ERROR AUTHENTICATING LOCAL TOKEN...');
					this.retrieveNewToken();
				});
		} else {
			// GET NEW TOKEN AND VALIDATE IT..
			// Typically user gets a token by logging in...
			// We are skipping the log-in for testing purposes
			this.retrieveNewToken();
		}
	};

	retrieveNewToken = () => {
		axios
			.get('/local-api/token')
			.then((response) => {
				const { token } = response.data;
				console.log('TOKEN RECEIVED', token);
				localStorage.setItem('token', token);
				axios
					.get('/local-api/auth', { headers: { Authorization: token } })
					.then((authResponse) => {
						const userPayload = authResponse.data;
						console.log('AUTH RESPONSE', userPayload);
						this.props.userAuth(userPayload);
					})
					.catch((authErr) => {
						console.log('ERROR AUTHENTICATING RETRIEVED TOKEN...');
					});
			})
			.catch((err) => {
				console.log('ERROR RETRIEVING JWT TOKEN FOR AUTH');
			});
	};

	render() {
		return (
			<React.Fragment>
				<BrowserRouter>
					<Navigation>
						<Route path="/" exact component={MaterialUi} />
						<Route path="/font-awesome" component={FontAwesome} />
						<Route path="/forms-validation" component={MuiForms} />
						<Route path="/tables-pagination" component={MuiTables} />
						<Route path="/charts-graphs" component={Charts} />
						<Route path="/sandbox" component={Sandbox} />
						<Route path="/github" component={Github} />
						<Route path="/rules" component={RuleManager} />
						<Route path="/extracts" component={ExtractManager} />
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
