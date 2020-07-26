import React from 'react';

const googleButton = props => (
	<button className="ui red google button" onClick={props.onClick}>
		<i className="google icon" />
		{props.children}
	</button>
);

export default googleButton;
