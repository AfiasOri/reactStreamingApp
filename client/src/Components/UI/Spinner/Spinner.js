import React from 'react';

const Spinner = props => (
	<div className="ui active inverted dimmer">
		<div className="ui medium text loader">{props.text || 'Loading...'}</div>
	</div>
);

export default Spinner;
