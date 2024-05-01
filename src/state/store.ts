import { applyMiddleware, createStore } from "redux";
import {thunk} from 'redux-thunk';
import { combineReducers } from "redux";
import dataReducer from "./reducers/AuthReducer";

const reducers = combineReducers({
    data:dataReducer
})

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)

export type RootState = ReturnType<typeof reducers>