import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as appReducer } from "./reducer";

const rootreducer = combineReducers({
  appReducer,
});

const store = legacy_createStore(rootreducer, applyMiddleware(thunk));

export { store };
