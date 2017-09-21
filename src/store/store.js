import {createStore} from 'redux'

const initStore = () => {
  const store = createStore()

  return store
}

const store = initStore()

export default store