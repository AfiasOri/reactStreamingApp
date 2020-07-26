import React from 'react';
import { Link } from 'react-router-dom';

const AdminButtons = props => (
	<div className="ui right floated content">
		<Link to={`/streams/edit/${props.streamId}`} className="mini ui olive basic button">
			EDIT
		</Link>
		<Link to={`/streams/delete/${props.streamId}`} className="mini ui negative basic button">
			DELETE
		</Link>
	</div>
);

const ListItem = props => (
	<div className="item">
		{props.isCreator ? <AdminButtons streamId={props.stream.id} /> : null}
		<i className="large middle aligned icon camera" />
		<div className="content">
			<Link to={`streams/${props.stream.id}`} className="header">
				{props.stream.title}
			</Link>
			<div className="description">{props.stream.description}</div>
		</div>
	</div>
);

export default ListItem;
