import React, { Component } from 'react';
import FontAwesome from './components/FontAwesome/FontAwesome';
import MaterialUi from './components/MaterialUi/MaterialUi';
import 'typeface-lato';
import './App.css';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<MaterialUi />
				<FontAwesome />
			</React.Fragment>
		);
	}
}

export default App;
