import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from 'actions';

import ListItem from './ListItem/ListItem';

const CreateStreamButton = props => (
	<div style={{ textAlign: 'right' }}>
		<Link to="/streams/new" className="ui button primary">
			{' '}
			CREATE STREAM
		</Link>
	</div>
);

class StreamList extends Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	render() {
		return (
			<div>
				<h2>Streams</h2>
				<div className="ui celled list">
					{this.props.streams.map(el => (
						<ListItem
							stream={el}
							key={el.id}
							isCreator={el.userId === this.props.currentUserId}
						/>
					))}
				</div>
				{this.props.isSignedIn ? <CreateStreamButton /> : null}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		streams: Object.values(state.streams),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
