import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
	typography: {
		useNextVariants: true
	},
	palette: {
		type: 'dark',
		primary: blue,
		secondary: red,
		background: {
			default: '#111111'
		}
	},
	status: {
		danger: 'orange'
	},
	overrides: {
		MuiDrawer: {
			paper: {
				background: '#13171F'
			}
		}
	}
});
