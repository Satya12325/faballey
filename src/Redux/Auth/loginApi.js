import { login_success } from "./Auth.action"
import { logout } from "./Auth.action"
export const loginApi = (params)=>(dispatch)=>{
    
    dispatch(login_success(params))

}
export const logoutApi = ()=>(dispatch)=>{
    dispatch(logout())
}