import { delete_cart_failure, delete_cart_request, delete_cart_success, get_cart_failure, get_cart_request, get_cart_success } from "./cart.action"
import axios from "axios";
export const cartapi = (params)=>(dispatch)=>{
    dispatch(get_cart_request())
    axios
    .get("https://fabaly-product-api.onrender.com/cart")
    .then((res)=>{
        console.log(res.data)
        dispatch(get_cart_success(res.data))
    })
    .catch((err)=>{
        dispatch(get_cart_failure())
        console.log(err)
    })

}
// https://fabaly-product-api.onrender.com

export const delete_api = (id)=>(dispatch)=>{
   console.log("id",id)
    dispatch(delete_cart_request());
    axios
    .delete(`https://fabaly-product-api.onrender.com/cart/${id}`)
    .then((res)=>{
        dispatch(delete_cart_success(id))
        console.log(res)
    })
    .catch((res)=>{
        dispatch(delete_cart_failure())
        console.log(res)
    })
}