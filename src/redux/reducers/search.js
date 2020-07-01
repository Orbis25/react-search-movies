import {
  SEARCH_MOVE_COMPLETE,
  SEARCH_MOVE_START,
  SEARCH_MOVE_ERROR,
} from "../../consts/actionTypes";


const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVE_START:
      return { ...state };
    case SEARCH_MOVE_COMPLETE:
      return { ...state, isLoading: false, MovieResults: action.results.data };
    case SEARCH_MOVE_ERROR:
      return { ...state, isLoading: false, movies: null };
    default:
      return { ...state };
  }
}
