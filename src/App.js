import React from 'react';
import {connect} from 'react-redux';

import Todo from './components/Todo';
import TodoInput from './components/TodoInput';
import * as todoActions from './actions/todoActions';

class App extends React.Component {
	componentDidMount() {
		console.log(this);
	}

	render() {
		const todos = this.props.todos.entrySeq().map((kv) => {
			return <Todo key={kv[0]} title={kv[1].get('title')} description={kv[1].get('description')}></Todo>
		});

		return (
			<div>
				{todos}
				<TodoInput></TodoInput>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.get('todo')
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoCreate: (...args) => {
			dispatch(todoActions.todoAdd(...args));
		},
		onTodoDelete: (...args) => {
			dispatch(todoActions.todoDelete(...args));
		},
		onTodoDone: (...args) => {
			dispatch(todoActions.todoDone(...args));
		},
		onTodoNotDone: (...args) => {
			dispatch(todoActions.todoDone(...args));
		},
		toTodoEdit: (...args) => {
			dispatch(todoActions.todoEdit(...args));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
