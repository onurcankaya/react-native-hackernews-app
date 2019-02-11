import { types } from '../actions'

const initialState = {
  query: null,
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_QUERY: {
      const { query } = action.payload

      return {
        ...state,
        query,
      }
    }
    default:
      return state
  }
}

export default search
