import { createStore, applyMiddleware, compose } from "./node_modules/redux";
import createSagaMiddleware from "./node_modules/redux-saga";
import rootReducer from "./Reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const middleware = [sagaMiddleware];

const composedEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(sagas);

export default store;
