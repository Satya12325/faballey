import {combineReducers} from "redux";
import { Auth_reducer } from "./Auth/Auth.reducer";

export const rootReducer = combineReducers({
    auth : Auth_reducer
})