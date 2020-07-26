import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from 'actions';

import Spinner from 'Components/UI/Spinner/Spinner';

class StreamShow extends Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}
	render() {
		if (this.props.currentStream) {
			const { title, description } = this.props.currentStream;
			return (
				<div>
					<h1>{title}</h1>
					<h3>{description}</h3>
				</div>
			);
		}

		return <Spinner />;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		currentStream: state.streams[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
