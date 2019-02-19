export const types = {
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
  GET_SEARCH_RESULTS: 'GET_SEARCH_RESULTS',
  GET_SEARCH_RESULTS_SUCCESS: 'GET_SEARCH_RESULTS_SUCCESS',
  GET_SEARCH_RESULTS_ERROR: 'GET_SEARCH_RESULTS_ERROR',
}

export const setSearchQuery = (query) => ({
  type: types.SET_SEARCH_QUERY,
  payload: { query },
})

export const getSearchResults = (query) => ({
  type: types.GET_SEARCH_RESULTS,
  payload: { query },
})

export const getSearchResultsSuccess = ({ results }) => ({
  type: types.GET_SEARCH_RESULTS_SUCCESS,
  payload: { results },
})

export const getSearchResultsError = (error) => ({
  type: types.GET_SEARCH_RESULTS_ERROR,
  payload: { error },
})
