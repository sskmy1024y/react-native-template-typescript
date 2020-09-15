import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from 'store/reducer';

const middlewares = [thunk]; // Add redux middleware here

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
