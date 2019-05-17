import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';

function mapStateToProps(state) {
	return {
		state
	};
}

const styles = (theme) => ({
	root: {}
});

class AppStore extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Typography component="h1">APP STORE</Typography>
			</div>
		);
	}
}

AppStore.propTypes = {
	classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withTheme()(withStyles(styles)(AppStore)));
