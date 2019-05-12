import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FontIcon from './Icons/FontIcon';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const styles = (theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		height: theme.spacing.unit * 7,
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create([ 'width', 'margin' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		height: theme.spacing.unit * 7,
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create([ 'width', 'margin' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 36
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap'
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		overflowX: 'hidden',
		width: theme.spacing.unit * 7 + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing.unit * 9 + 1
		}
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		height: theme.spacing.unit * 7
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3
	}
});

class MiniDrawer extends React.Component {
	state = {
		open: false,
		value: 0
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	handleChange = (e, value) => {
		this.setState({ value });
	};

	render() {
		const { classes, theme } = this.props;
		const upperDrawerSection = [
			{ label: 'Home', kind: 'home', to: '/' },
			{ label: 'Forms & Validation', kind: 'assignment', to: 'forms-validation' },
			{ label: 'Tables & Pagination', kind: 'table_chart', to: 'tables-pagination' },
			{ label: 'Charts & Graphs', kind: 'bar_chart', to: 'charts-graphs' },
			{ label: 'Rules', kind: 'table_chart', to: 'rules' },
			{ label: 'Extracts', kind: 'table_chart', to: 'extracts' }
		];
		const lowerDrawerSection = [
			{ label: 'Source Code', kind: 'code', to: 'github' },
			{
				label: 'Sandbox Environment',
				kind: 'computer',
				to: 'sandbox'
			}
		];
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					color="default"
					className={classNames(classes.appBar, {
						[classes.appBarShift]: this.state.open
					})}
				>
					<Toolbar disableGutters={!this.state.open}>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={this.handleDrawerOpen}
							className={classNames(classes.menuButton, {
								[classes.hide]: this.state.open
							})}
						>
							<MenuIcon />
						</IconButton>
						<Tabs
							value={this.state.value}
							onChange={this.handleChange}
							indicatorColor="primary"
							textColor="primary"
							variant="fullWidth"
						>
							<Tab label="Material UI" />
							<Tab label="AppBar" />
							<Tab label="Component" />
						</Tabs>
					</Toolbar>
				</AppBar>
				<Drawer
					variant="permanent"
					className={classNames(classes.drawer, {
						[classes.drawerOpen]: this.state.open,
						[classes.drawerClose]: !this.state.open
					})}
					classes={{
						paper: classNames({
							[classes.drawerOpen]: this.state.open,
							[classes.drawerClose]: !this.state.open
						})
					}}
					open={this.state.open}
				>
					<div className={classes.toolbar}>
						<IconButton onClick={this.handleDrawerClose} className={classes.iconButton}>
							{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
						</IconButton>
					</div>
					<Divider />
					<List>
						{upperDrawerSection.map((item) => {
							return (
								<ListItem key={item.label} button component={Link} to={item.to}>
									<ListItemIcon>
										<FontIcon kind={item.kind} />
									</ListItemIcon>
									<ListItemText primary={item.label} />
								</ListItem>
							);
						})}
					</List>
					<Divider />
					<List>
						{lowerDrawerSection.map((item) => (
							<ListItem key={item.label} button component={Link} to={item.to}>
								<ListItemIcon>
									<FontIcon kind={item.kind} />
								</ListItemIcon>
								<ListItemText primary={item.label} />
							</ListItem>
						))}
					</List>
				</Drawer>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					{this.props.children}
				</main>
			</div>
		);
	}
}

MiniDrawer.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
