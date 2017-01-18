import React from 'react';
import {connect} from 'react-redux';

import * as todoActions from './actions/todoActions';

import './App.scss';

class App extends React.Component {
	componentDidMount() {
		console.log(this);
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state
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
