import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import { reducer as  userAuthReducer } from "./Authentication/reducer" 
import { reducer as JobReducer } from "./JobListing/reducer"
import { reducer as GetJobReducer } from "./GetJob/reducer"
const rootRducer = combineReducers({
  userAuthReducer,
  JobReducer,
  GetJobReducer
})

export const store = legacy_createStore(rootRducer, applyMiddleware(thunk))