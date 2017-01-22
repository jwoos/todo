import React from 'react';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};

		const propsToBind = ['validateAndSubmit', 'updateTitle', 'updateDescription'];
		for (let x of propsToBind) {
			this[x] = this[x].bind(this);
		}
	}

	validateAndSubmit(e) {
		e.preventDefault();

		if (this.state.title) {
			this.props.submit(this.state.title, this.state.description || '');

			this.setState({
				title: '',
				description: ''
			});

			this.refs.description.value = '';
			this.refs.title.value = '';
		}
	}

	updateTitle(e) {
		e.preventDefault();

		this.setState({
			title: e.target.value
		});
	}

	updateDescription(e) {
		e.preventDefault();

		this.setState({
			description: e.target.value
		});
	}

	render() {
		return (
			<div className="form">
				<div className="label-input">
					<label>Title</label>
					<input ref="title" placeholder="An Example title" onChange={this.updateTitle}></input>
				</div>

				<div className="label-input">
					<label>Description</label>
					<input ref="description" placeholder="Optional Description" onChange={this.updateDescription}></input>
				</div>

				<button onClick={this.validateAndSubmit}>submit</button>
			</div>
		)
	}
}

export default TodoForm;
