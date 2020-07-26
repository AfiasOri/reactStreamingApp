import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from 'actions';

import GoogleButton from './GoogleButton';

class GoogleAuth extends Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId:
						'1097626005020-a0il1ram6jennboemjqjc11a3kt9pisb.apps.googleusercontent.com',
					scope: 'email',
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = isSignedIn => {
		isSignedIn ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut();
	};

	renderButton() {
		if (this.props.isSignedIn === null) return null;
		else if (this.props.isSignedIn)
			return <GoogleButton onClick={this.auth.signOut}>Sign Out</GoogleButton>;

		return <GoogleButton onClick={this.auth.signIn}>Sign In With Google</GoogleButton>;
	}

	render() {
		return <div>{this.renderButton()}</div>;
	}
}

const mapStateToProps = state => {
	return {
		isSignedIn: state.auth.isSignedIn,
		userId: state.auth.userId,
	};
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
