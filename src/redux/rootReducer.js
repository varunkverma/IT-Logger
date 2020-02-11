import { combineReducers } from "redux";

import logReducer from "./log/log.reducer";
import techReducer from "./tech/tech.reducer";
const rootReducer = combineReducers({
  log: logReducer,
  tech: techReducer
});

export default rootReducer;
