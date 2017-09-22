import {createStore} from 'redux'
import BadgeReducer from '../reducers/badges'
import { composeWithDevTools } from 'redux-devtools-extension';

const initStore = () => {
  const store = createStore(
    BadgeReducer,
    composeWithDevTools()
  );
  return store;
}

const store = initStore();

export default store;
