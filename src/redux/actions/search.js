import {
  SEARCH_MOVE_START,
  SEARCH_MOVIE_BY_ID_START,
} from "../../consts/actionTypes";

export const searchMovie = (payload) => ({
  type: SEARCH_MOVE_START,
  payload,
});

export const searchMovieById = (payload) => ({
  type: SEARCH_MOVIE_BY_ID_START,
  payload,
});
