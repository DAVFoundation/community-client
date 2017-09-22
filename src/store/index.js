import {createStore} from 'redux'
import BadgeReducer from '../reducers/badges'

const initStore = () => {
  const store = createStore(BadgeReducer)
  return store
}

const store = initStore()

export default store