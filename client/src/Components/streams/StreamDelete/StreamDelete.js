import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import { fetchStream, deleteStream } from 'actions';
import history from '../../../history';

import Modal from 'Components/UI/Modal/Modal';
import Spinner from 'Components/UI/Spinner/Spinner';

class StreamDelete extends Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onDismiss = () => history.goBack();
	onDelete = () => {
		this.props.deleteStream(this.props.match.params.id);
	};

	actions = (
		<Fragment>
			<button onClick={this.onDelete} className="ui button negative">
				DELETE
			</button>
			<button onClick={this.onDismiss} className="ui button">
				CANCEL
			</button>
		</Fragment>
	);

	render() {
		console.log(this.props);
		if (!this.props.currentStream) return <Spinner />;
		return (
			<Modal
				onDismiss={this.onDismiss}
				title={'Delete Stream'}
				content={`Are You Sure You Want To Delete "${this.props.currentStream.title}"?`}
				actions={this.actions}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		currentStream: state.streams[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
