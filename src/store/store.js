import {createStore} from 'redux'
import BadgeReducer from '../reducers/Badges'

const initStore = () => {
  const store = createStore(BadgeReducer)
  console.log(store.getState())
  return store
}

const store = initStore()

export default store