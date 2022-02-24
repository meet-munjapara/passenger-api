import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import passengersReducer from "./reducer";

const middlewares = [reduxThunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(
  passengersReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
