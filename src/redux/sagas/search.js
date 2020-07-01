import { put, call, takeLatest } from "redux-saga/effects";
import {
  SEARCH_MOVE_START,
  SEARCH_MOVE_COMPLETE,
  SEARCH_MOVE_ERROR,
} from "../../consts/actionTypes";

import { apiCall } from "../api/index";

export function* searchMovie({ payload }) {
  try {
    const results = yield call(apiCall, `&s=${payload}`, null, null, "GET");
    yield put({ type: SEARCH_MOVE_COMPLETE, results });
  } catch (error) {
    yield put({ type: SEARCH_MOVE_ERROR, error });
  }
}

export default function* search() {
  yield takeLatest(SEARCH_MOVE_START, searchMovie);
}
