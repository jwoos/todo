import React from 'react';
import {connect} from 'react-redux';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import todoActions from './actions/todoActions';

class App extends React.Component {
	render() {
		return (
			<div id="app">
				<TodoList
					todos={this.props.todos}
					onDelete={this.props.onTodoDelete}
					onDone={this.props.onTodoDone}
					onNotDone={this.props.onTodoNotDone}>
				</TodoList>
				<TodoForm submit={this.props.onTodoCreate}></TodoForm>
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
			dispatch(todoActions.todoNotDone(...args));
		},
		toTodoEdit: (...args) => {
			dispatch(todoActions.todoEdit(...args));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
