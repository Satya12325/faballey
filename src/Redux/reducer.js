import {combineReducers} from "redux";
import { Auth_reducer } from "./Auth/Auth.reducer";
import {appReducer} from "./Allproduct/reducer"
export const rootReducer = combineReducers({
    auth : Auth_reducer,
    app: appReducer
})