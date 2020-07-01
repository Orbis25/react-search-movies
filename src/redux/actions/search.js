import { SEARCH_MOVE_START } from "../../consts/actionTypes";

export const searchMovie = (payload) => ({
  type: SEARCH_MOVE_START,
  payload,
});
