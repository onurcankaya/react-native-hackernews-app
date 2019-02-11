import { createStore } from 'redux'

import rootReducer from './reducers'

export const configureStore = () => {
  const store = createStore(rootReducer)

  return store
}
