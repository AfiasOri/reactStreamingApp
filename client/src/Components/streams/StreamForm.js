import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
	renderInput(formProps) {
		const err = { color: 'red', fontSize: '14px', fontStyle: 'italic' };
		return (
			<div className="field">
				<label>{formProps.label}</label>
				<input {...formProps.input} autoComplete="off" />
				<div style={err}>{formProps.meta.touched ? formProps.meta.error : null}</div>
			</div>
		);
	}

	onSubmit = async formValues => {
		await this.props.onSubmit(formValues);
	};

	render() {
		return (
			<form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<Field name="title" component={this.renderInput} label="Enter Title" />
				<Field name="description" component={this.renderInput} label="Enter Description" />
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = formValues => {
	const errors = {};
	if (!formValues.title) errors.title = 'You must enter a title';

	if (formValues.title && formValues.title.length < 3)
		errors.title = 'Title must be at least 3 characters';

	if (!formValues.description) errors.description = 'You must enter a description';

	return errors;
};

export default reduxForm({
	form: 'streamForm',
	validate,
})(StreamForm);
