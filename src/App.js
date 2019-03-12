import React, { Component } from 'react';
import FontAwesome from './components/FontAwesome/FontAwesome';
import MaterialUi from './components/MaterialUi/MaterialUi';
import Navigation from './components/MaterialUi/Navigation';
import 'typeface-lato';
import './App.css';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navigation>
					<MaterialUi />
					<FontAwesome />
				</Navigation>
			</React.Fragment>
		);
	}
}

export default App;
