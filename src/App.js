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
import 'typeface-lato';
import './App.css';

class App extends Component {
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
					</Navigation>
				</BrowserRouter>
			</React.Fragment>
		);
	}
}

export default App;
