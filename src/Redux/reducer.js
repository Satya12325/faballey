import {combineReducers} from "redux";
import { Auth_reducer } from "./Auth/Auth.reducer";
import {cart_reducer} from "./Shopping_cart/cart.reducer"
export const rootReducer = combineReducers({
    auth : Auth_reducer,
    shoppingCart :  cart_reducer

})