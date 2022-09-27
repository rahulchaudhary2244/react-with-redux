import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk';

//here reducers = combined state of all reducers , and second arguement holds defaultState
const store = createStore(reducers, {}, applyMiddleware(thunk));

export { store };
