import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';
import AppTile from '../components/AppTile/AppTile';

function mapStateToProps(state) {
	return {
		state
	};
}

const styles = (theme) => ({
	root: { display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center' }
});

class AppStore extends Component {
	render() {
		const { classes } = this.props;
		const testApp = {
			id: 1,
			index: 0,
			label: 'Test App Name',
			abbreviation: 'TST',
			url: 'http://google.com',
			logo: '',
			color: '#311b92',
			borderColor: '#12093a',
			description: 'Test App Description is to be used for describing the test app in the tiles',
			active: false,
			techStack: 'React, Redux, Material UI, Node, Express, Knex, SQLite, JWT'
		};
		const testApp2 = {
			id: 2,
			index: 1,
			label: 'App Name',
			abbreviation: 'MNT',
			url: 'http://google.com',
			logo: '',
			color: '#0ebce8',
			borderColor: '#0b5b7d',
			description: 'App Description is to be used for describing the test app in the tiles',
			active: false,
			techStack: 'React, Redux, Material UI, Node, Express, Knex, SQLite, JWT'
		};
		return (
			<div className={classes.root}>
				<AppTile app={testApp} />
				<AppTile app={testApp2} />
				<AppTile app={testApp} />
				<AppTile app={testApp} />
				<AppTile app={testApp} />
				<AppTile app={testApp} />
				<AppTile app={testApp} />
				<AppTile app={testApp} />
				<AppTile app={testApp} />
				<AppTile app={testApp} />
				<AppTile app={testApp} />
				<AppTile app={testApp} />
				<AppTile app={testApp} />
				<AppTile app={testApp} />
				<AppTile app={testApp} />
				<AppTile app={testApp} />
			</div>
		);
	}
}

AppStore.propTypes = {
	classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withTheme()(withStyles(styles)(AppStore)));
