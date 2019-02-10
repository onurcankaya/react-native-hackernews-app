import { createStore } from 'redux'

export const configureStore = () => {
  const store = createStore((state) => state)

  return store
}
