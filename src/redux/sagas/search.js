import { put, call, takeLatest } from "redux-saga/effects";
import {
  SEARCH_MOVE_START,
  SEARCH_MOVE_COMPLETE,
  SEARCH_MOVE_ERROR,
  SEARCH_MOVIE_BY_ID_COMPLETE,
  SEARCH_MOVIE_BY_ID_ERROR,
  SEARCH_MOVIE_BY_ID_START,
} from "../../consts/actionTypes";

import { apiCall } from "../api/index";

export function* searchMovie({ payload }) {
  try {
    const results = yield call(
      apiCall,
      `&s=${payload.movieName}`,
      null,
      null,
      "GET"
    );
    yield put({ type: SEARCH_MOVE_COMPLETE, results });
  } catch (error) {
    yield put({ type: SEARCH_MOVE_ERROR, error });
  }
}

export function* searchMovieById({ payload }) {
  try {
    const result = yield call(
      apiCall,
      `&i=${payload.movieId}`,
      null,
      null,
      "GET"
    );
    yield put({ type: SEARCH_MOVIE_BY_ID_COMPLETE, result });
  } catch (error) {
    yield put({ type: SEARCH_MOVIE_BY_ID_ERROR, error });
  }
}

export default function* search() {
  yield takeLatest(SEARCH_MOVE_START, searchMovie);
  yield takeLatest(SEARCH_MOVIE_BY_ID_START, searchMovieById);
}
