import { createStore, applyMiddleware } from "redux";
import reduxSaga from "redux-saga";
import rootSaga from "../sagas";
import reducers from '../reducers'

const configureStore = () => {
  const sagaMiddleware = reduxSaga();
  return {
    ...createStore(reducers, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};

export default configureStore;
