import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./Auth.actionType"

export const login_request=()=>{
    return{
        type : LOGIN_REQUEST
    }
}

export const login_success=(payload)=>{
    console.log("a.a.",payload)
    return {
        type : LOGIN_SUCCESS,
        payload : payload
    }
}
export const login_failure = ()=>{
    return{
        type : LOGIN_FAILURE
    }
}

export const logout = ()=>{
    return{
        type : LOGOUT
    }
}