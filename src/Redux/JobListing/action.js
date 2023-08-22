
import axios from "axios"
import { DELETE_JOB_ERROR, DELETE_JOB_REQUEST, DELETE_JOB_SUCCESS, GET_ALL_JOBS_Error, GET_ALL_JOBS_Request, GET_ALL_JOBS_Success, POST_NEW_JOB_ERROR, POST_NEW_JOB_REQUEST, POST_NEW_JOB_SUCCESS, UPDATE_JOB_ERROR, UPDATE_JOB_REQUEST, UPDATE_JOB_SUCCESS, VIEW_APPLICATION_SUCCESS } from "./actiontype"
const baseURL = "https://match-yor-role.onrender.com"



export const GetAllJob= (dispatch) => {
   let name = localStorage.getItem("companyname")
      dispatch({type:GET_ALL_JOBS_Request})
       axios.get(`${baseURL}/job`)
      .then((res) =>{
         let resdata = res.data.data.filter((el)=> el.companyName ==name)
          console.log(resdata)
         dispatch({type:GET_ALL_JOBS_Success, payload:resdata})
      })
      .catch((err) => dispatch({type:GET_ALL_JOBS_Error}))
      
}

export const viewApplicationforjob= (id , token)=> (dispatch)=> {
    const headers = {
        Authorization: `Bearer ${token}`,
      };
   
    axios.get(`${baseURL}/job/${id}/applications`, {headers:headers})
    .then((res) => dispatch({type:VIEW_APPLICATION_SUCCESS, payload:res.data.applications}))
    .catch((err) => dispatch({type:GET_ALL_JOBS_Error}))
}

export const PostJobApplication= (obj , token)=> (dispatch)=> {
  const headers = {
      Authorization: `Bearer ${token}`,
    };
  dispatch({type:POST_NEW_JOB_REQUEST})
 return axios.post(`${baseURL}/job/create`, obj, {headers:headers})
  .then((res) => dispatch({type:POST_NEW_JOB_SUCCESS, payload:res.data.message}))
  .catch((err) => dispatch({type:POST_NEW_JOB_ERROR}))
}


export const DeleteJobApplication= (id , token)=> (dispatch)=> {
  const headers = {
      Authorization: `Bearer ${token}`,
    };
  dispatch({type:DELETE_JOB_REQUEST})
 return axios.delete(`${baseURL}/job/${id}`,  {headers:headers})
  .then((res) => dispatch({type:DELETE_JOB_SUCCESS, payload:res.data.message}))
  .catch((err) => dispatch({type:DELETE_JOB_ERROR}))
}

export const UpdateJobApplication= (id ,updatejob, token)=> (dispatch)=> {
  const headers = {
      Authorization: `Bearer ${token}`,
    };
  dispatch({type:UPDATE_JOB_REQUEST})
 return axios.put(`${baseURL}/job/${id}`, updatejob, {headers:headers})
  .then((res) => dispatch({type:UPDATE_JOB_SUCCESS, payload:res.data.message}))
  .catch((err) => dispatch({type:UPDATE_JOB_ERROR}))
}