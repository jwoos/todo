import React from 'react';

class Todo extends React.Component {
	render() {
		return (
			<div>
				<h3>{this.props.title}</h3>
				<p>{this.props.description}</p>
			</div>
		);
	}
}

export default Todo;
