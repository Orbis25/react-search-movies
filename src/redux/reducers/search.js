import {
  SEARCH_MOVE_COMPLETE,
  SEARCH_MOVE_START,
  SEARCH_MOVE_ERROR,
  SEARCH_MOVIE_BY_ID_COMPLETE,
  SEARCH_MOVIE_BY_ID_ERROR,
  SEARCH_MOVIE_BY_ID_START,
} from "../../consts/actionTypes";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVE_START:
      return { ...state };
    case SEARCH_MOVE_COMPLETE:
      return { ...state, isLoading: false, MovieResults: action.results.data };
    case SEARCH_MOVE_ERROR:
      return { ...state, isLoading: false, MovieResults: null };
    case SEARCH_MOVIE_BY_ID_START:
      return { ...state, isLoading: true, movieResult: null };
    case SEARCH_MOVIE_BY_ID_ERROR:
      return { ...state, isLoading: false, movieResult: null };
    case SEARCH_MOVIE_BY_ID_COMPLETE:
      return { ...state, isLoading: false, movieResult: action.result.data };
    default:
      return { ...state };
  }
}
