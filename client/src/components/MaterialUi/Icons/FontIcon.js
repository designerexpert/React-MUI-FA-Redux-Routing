import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function FontIcon(props) {
	return (
		<i {...props} className="material-icons">
			{props.kind}
		</i>
	);
}

export default FontIcon;
