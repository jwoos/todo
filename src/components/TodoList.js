import React from 'react';

import Todo from './Todo';

class TodoList extends React.Component {
	render() {
		const todos = this.props.todos.entrySeq().map((kv) => {
			return <Todo
				key={kv[0]}
				id={kv[0]}
				title={kv[1].get('title')}
				description={kv[1].get('description')}
				done={kv[1].get('done')}
				datetimeDone={kv[1].get('datetimeDone')}
				datetimeUpdated={kv[1].get('datetimeUpdated')}
				datetimeCreated={kv[1].get('datetimeCreated')}
				onNotDone={this.props.onNotDone}
				onDone={this.props.onDone}
				onDelete={this.props.onDelete}>
			</Todo>;
		});

		return (
			<div>
				{todos}
			</div>
		);
	}
}

export default TodoList;
