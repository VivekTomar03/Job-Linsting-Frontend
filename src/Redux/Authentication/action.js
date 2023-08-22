import axios from "axios"
import { GET_LOGIN_REQUEST_USER, GET_LOGIN_REQUEST_USER_FAILURE, GET_LOGIN_REQUEST_USER_SUCCESS, GET_SIGNUP_REQUEST_USER, GET_SIGNUP_REQUEST_USER_FAILURE, GET_SIGNUP_REQUEST_USER_SUCCESS } from "./actiontype"
const baseURL = "https://match-yor-role.onrender.com"

export const LoginRequestUser = (obj,userType)=> (dispatch)=>{
    let name = userType
  dispatch({type:GET_LOGIN_REQUEST_USER})
return  axios.post(`${baseURL}/${name}/login`, obj)
  .then((response)=> {return dispatch({type:GET_LOGIN_REQUEST_USER_SUCCESS, payload:response?.data})
})
  .catch((error)=> dispatch({type:GET_LOGIN_REQUEST_USER_FAILURE}))

}


///////////////////////////REGISTER REQ/////////////////////////////////////

export const RegisterAccountRequest = (obj, usertype)=> (dispatch)=> {
  let name = usertype=="candidate"?"user":"company"
  dispatch({type:GET_SIGNUP_REQUEST_USER})
return  axios.post(`${baseURL}/${name}/register`, obj)
  .then((response)=> dispatch({type:GET_SIGNUP_REQUEST_USER_SUCCESS, payload:response.data}))
  .catch((error)=> dispatch({type:GET_SIGNUP_REQUEST_USER_FAILURE}))
}