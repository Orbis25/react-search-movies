import { get } from "lodash";

export const isSearchLoading = (state) => get(state, "search.isLoading");
export const movieResults = (state) => get(state, "search.MovieResults.Search");
export const movieResult = (state) => get(state, "search.movieResult");
