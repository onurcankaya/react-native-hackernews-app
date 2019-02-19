import axios from 'axios'
import { all, call, put, takeEvery } from 'redux-saga/effects'

import * as actions from './actions'

const HN_BASE_URL = 'https://hn.algolia.com/api/v1/search?query='

const getSearchResults = (query) => axios(`${HN_BASE_URL}${query}`)

function* handleGetSearchResults(action) {
  try {
    const { query } = action.payload

    const results = yield call(getSearchResults, query)

    yield put(actions.getSearchResultsSuccess({ results: results.data.hits }))
  } catch ({ error }) {
    yield put(actions.getSearchResultsError({ error }))
  }
}

export default function* root() {
  yield all([
    takeEvery(actions.types.GET_SEARCH_RESULTS, handleGetSearchResults),
  ])
}
