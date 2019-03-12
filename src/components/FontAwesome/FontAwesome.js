import React, { Component } from 'react';
/* Import For Font Awesome Use */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo, faSpinner } from '@fortawesome/free-solid-svg-icons';

const FontAwesome = () => {
	return (
		<div>
			Font Awesome Example:
			<FontAwesomeIcon icon={faIgloo} />
			<br />
			<br />
			Spinner Example:
			<FontAwesomeIcon icon={faSpinner} spin color="rgba(100,100,230,1)" />
		</div>
	);
};

export default FontAwesome;
