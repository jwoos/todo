import React from 'react';

class Todo extends React.Component {
	constructor(props) {
		super(props);

		const propsToBind = ['handleDelete', 'handleDone', 'handleNotDone'];
		for (let x of propsToBind) {
			this[x] = this[x].bind(this);
		}
	}

	handleDelete(e) {
		e.preventDefault();

		this.props.onDelete(this.props.id);
	}

	handleDone(e) {
		e.preventDefault();

		this.props.onDone(this.props.id);
	}

	handleNotDone(e) {
		e.preventDefault();

		this.props.onNotDone(this.props.id);
	}

	render() {
		const toggle = this.props.done ?
			<button onClick={this.handleNotDone}>not done</button> :
			<button onClick={this.handleDone}>done</button>;

		return (
			<div className={'card' + (this.props.done ? ' done' : '')}>
				<div className="card-content">
					<h3 className="title">{this.props.title}</h3>
					<p className="description">{this.props.description}</p>

					<div className="timestamp-container">
						<div className="timestamp-block">
							<p className="timestamp-label">Created: </p>
							<p>{this.props.datetimeCreated ?
									this.props.datetimeCreated.toLocaleDateString('en-GB') : 'N/A'}</p>
						</div>
						<div className="timestamp-block">
							<p className="timestamp-label">Updated: </p>
							<p>{this.props.datetimeCreated ?
									this.props.datetimeCreated.toLocaleDateString('en-GB') : 'N/A'}</p>
						</div>
						<div className="timestamp-block">
							<p className="timestamp-label">Done: </p>
							<p>{this.props.datetimeDone ?
									this.props.datetimeDone.toLocaleDateString('en-GB') : 'N/A'}</p>
						</div>
					</div>

					<div className="button-group">
						<button onClick={this.handleDelete}>delete</button>
						{toggle}
					</div>
				</div>
				<div className="done-status">
				</div>
			</div>
		);
	}
}

export default Todo;
