import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStream, editStream } from 'actions';

import StreamForm from '../StreamForm';
import Spinner from 'Components/UI/Spinner/Spinner';

class StreamEdit extends Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onSubmit = async formValues => {
		await this.props.editStream(this.props.match.params.id, formValues);
	};

	render = () => {
		return this.props.currentStream ? (
			<div>
				<h3>Edit Stream</h3>
				<StreamForm
					initialValues={{
						title: this.props.currentStream.title,
						description: this.props.currentStream.description,
					}}
					onSubmit={this.onSubmit}
				/>
			</div>
		) : (
			<Spinner />
		);
	};
}

const mapStateToProps = (state, ownProps) => {
	return {
		currentStream: state.streams[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
