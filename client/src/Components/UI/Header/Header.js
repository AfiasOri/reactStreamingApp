import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from 'Components/GoogleAuth/GoogleAuth';

const header = props => (
	<div className="ui secondary pointing menu">
		<Link to="/" className="item">
			Twitch
		</Link>
		<div className="right menu">
			<Link to="/" className="item">
				All Streams
			</Link>
			<GoogleAuth />
		</div>
	</div>
);

export default header;
