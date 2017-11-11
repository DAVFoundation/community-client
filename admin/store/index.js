import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';

const store = createStore(
  reducers
);

export default store;
