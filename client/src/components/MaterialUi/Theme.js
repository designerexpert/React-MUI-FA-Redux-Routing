import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
	typography: {
		useNextVariants: true
	},
	palette: {
		primary: blue,
		secondary: red
	},
	status: {
		danger: 'orange'
	}
});
