import { combineReducers } from "redux";

//test

function testing() {
  return {
    testing: "test",
  };
}

const rootReducer = combineReducers({
  testing,
});

export default rootReducer;
