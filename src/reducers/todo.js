import {createReducer} from 'redux-create-reducer';

const initialState = Immutable.List([]);

const TODO_ADD = (state, action) => {
	return state;
};

const TODO_DELETE = (state, action) => {
	return state;
};

const TODO_DONE = (state, action) => {
	return state;
};

const TODO_NOT_DONE = (state, action) => {
	return state;
};

export default createReducer(initialState, {
	TODO_ADD,
	TODO_DELETE,
	TODO_DONE,
	TODO_NOT_DONE
});
