export const types = {
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
}

export const setSearchQuery = (query) => ({
  type: types.SET_SEARCH_QUERY,
  payload: { query: query },
})
