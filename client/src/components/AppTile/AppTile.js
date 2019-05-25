import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';


function mapStateToProps(state) {
	return {
		state
	};
}

const styles = (theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: theme.spacing.unit * 30,
		margin: theme.spacing.unit * 3
	},
	appTile: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: theme.spacing.unit * 30,
		height: theme.spacing.unit * 30,
		borderRadius: theme.spacing.unit * 5,
		border: '4px solid',
		boxShadow: '0 5px 9px rgba(0,0,0,0.5)',
		transition: 'transform ease-out 0.5s'
	},
	appTileExpanded: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: theme.spacing.unit * 30,
		height: theme.spacing.unit * 30,
		borderRadius: theme.spacing.unit * 5,
		border: '4px solid',
		boxShadow: '0 5px 9px rgba(0,0,0,0.5)',
		transform: 'scale(1.3)',
		transition: 'transform ease-out 0.5s'
	},
	hidden: {
		visibility: 'collapse',
		opacity: 0,
		fontSize: theme.spacing.unit * 1.8,
		textTransform: 'uppercase',
		transition: 'opacity ease-out 0.5s'
	},
	noDisplay: {
		opacity: 0,
		fontSize: theme.spacing.unit * 1.8,
		textTransform: 'uppercase',
		transition: 'opacity ease-out 0.5s',
		display: 'none'
	},
	appLabel: {
		color: '#777777 !important',
		visibility: 'visible',
		opacity: 1,
		fontSize: theme.spacing.unit * 1.8,
		textTransform: 'uppercase',
		transition: 'opacity ease-in 0.5s'
	},
	appLabelLarge: {
		color: '#FFF !important',
		visibility: 'visible',
		opacity: 1,
		fontSize: theme.spacing.unit * 2.5,
		textTransform: 'uppercase',
		transition: 'opacity ease-in 0.5s, height  ease-in 0.5s'
	},
	appDescription: {
		display: 'flex',
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: '#FFF !important',
		visibility: 'visible',
		opacity: 1,
		fontSize: theme.spacing.unit * 1,
		textTransform: 'uppercase',
		transition: 'opacity ease-in 0.5s, height  ease-in 0.5s'
	},
	appAbbreviationPerm: {
		position: 'absolute',
		top: theme.spacing.unit * 8,
		center: 0,
		color: '#FFF !important',
		visibility: 'visible',
		opacity: 1,
		fontSize: theme.spacing.unit * 8,
		fontWeight: 900,
		textTransform: 'uppercase'
	},
	appStack: {
		display: 'flex',
		position: 'absolute',
		bottom: theme.spacing.unit * 2,
		center: 0,
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: '#FFF !important',
		visibility: 'visible',
		opacity: 1,
		fontSize: theme.spacing.unit * 1,
		textTransform: 'uppercase',
		transition: 'opacity ease-in 0.5s, height  ease-in 0.5s'
	}
});

class AppTile extends Component {
	state = { active: false };
	componentDidMount() {
		this.setState({ avtive: this.props.app.active });
	}

	activate = (e) => {
		this.setState({ active: true });
	};

	deactivate = (e) => {
		this.setState({ active: false });
	};

	render() {
		console.log('TILE STATE', this.state);
		console.log('TILE PROPS', this.props);
		const { active } = this.state;
		const { classes, appShortcutAdd, app } = this.props;
		const { id, index, label, abbreviation, url, logo, color, description, borderColor, techStack } = app;
		return (
			<div className={classes.root} onMouseEnter={this.activate} onMouseLeave={this.deactivate}>
				<div
					className={active ? classes.appTileExpanded : classes.appTile}
					style={{ borderColor: borderColor, backgroundColor: color }}
				>
					<Typography component="h2" className={active ? classes.appLabelLarge : classes.hidden}>
						{label}
					</Typography>
					<Typography component="h3" className={active ? classes.appDescription : classes.hidden}>
						{description}
					</Typography>
					<Typography component="h5" className={classes.appAbbreviationPerm}>
						{abbreviation}
					</Typography>
					<Typography component="h3" className={active ? classes.appStack : classes.hidden}>
						{techStack}
					</Typography>
				</div>

				<Typography component="h1" className={active ? classes.hidden : classes.appLabel}>
					{label}
				</Typography>
			</div>
		);
	}
}

AppTile.propTypes = {
	classes: PropTypes.object.isRequired,
	app: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withTheme()(withStyles(styles)(AppTile)));
