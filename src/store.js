import {applyMiddleware, createStore, compose} from 'redux';
import {combineReducers} from 'redux-immutable';
import {persistStore, autoRehydrate} from 'redux-persist-immutable';
import * as localForage from 'localforage';
import createLogger from 'redux-logger';
import Immutable from 'immutable';

import reducers from './reducers';

const reducer = combineReducers(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	Immutable.Map({}),
	composeEnhancers(
		applyMiddleware(
			createLogger()
		),
		autoRehydrate()
	)
);

persistStore(store, {
	store: localForage,
	debounce: 100
});

export default store;
