import {applyMiddleware, createStore} from 'redux';
import createLogger from 'redux-logger';
import * as Immutable from 'immutable';

import reducers from './reducers';

const reducer = combineReducers(reducers);

const store = createStore(
	reducer,
	Immutable.Map({}),
	applyMiddleware(createLogger())
);

export default store;
