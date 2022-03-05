import { login_success } from "./Auth.action"
export const loginApi = (params)=>(dispatch)=>{
    
    dispatch(login_success(params))

}