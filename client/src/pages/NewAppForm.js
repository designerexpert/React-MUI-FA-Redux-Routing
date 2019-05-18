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

class NewAppForm extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Typography component="h1">NEW APP FORM</Typography>
			</div>
		);
	}
}

NewAppForm.propTypes = {
	classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withTheme()(withStyles(styles)(NewAppForm)));
