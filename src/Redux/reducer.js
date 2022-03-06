import {combineReducers} from "redux";
import { Auth_reducer } from "./Auth/Auth.reducer";
import {appReducer} from "./Allproduct/reducer"
import {cart_reducer} from "./Shopping_cart/cart.reducer"
export const rootReducer = combineReducers({
    auth : Auth_reducer,
    app: appReducer,
    shoppingCart :  cart_reducer
})