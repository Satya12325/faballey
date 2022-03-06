import { DELETE_CART_FAILURE, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS } from "./cart.actionType"


export const get_cart_request = ()=>{
    return{
        type :GET_CART_REQUEST
    }
}

export const get_cart_success = (payload)=>{
    return{
        type : GET_CART_SUCCESS,
        payload : payload
    }
}
export const get_cart_failure = ()=>{
    return{
        type : GET_CART_FAILURE
    }
}

//DELETE_CART
export const delete_cart_request = ()=>{
    return{
        type :DELETE_CART_REQUEST
    }
}

export const delete_cart_success = (payload)=>{
    console.log("dlt",payload)
    return{
        type : DELETE_CART_SUCCESS,
        payload : payload
    }
}
export const delete_cart_failure = ()=>{
    return{
        type : DELETE_CART_FAILURE
    }
}