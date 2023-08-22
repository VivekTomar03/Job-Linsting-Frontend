import axios from "axios";
import {
  APPLY_JOB_ERROR,
  APPLY_JOB_REQUEST,
  APPLY_JOB_SUCCESS,
  GET_JOBS_Error,
  GET_JOBS_Request,
  GET_JOBS_Success,
  SINGAL_JOB_ERROR,
  SINGAL_JOB_REQUEST,
  SINGAL_JOB_SUCCESS,
} from "./actiontype";
const baseURL = "https://match-yor-role.onrender.com";

export const GetJobForUser = (q, sort) => (dispatch) => {
  dispatch({ type: GET_JOBS_Request });
  axios
    .get(`${baseURL}/job?q=${q}&sortBy=${sort}` )
    .then((res) => {
      dispatch({ type: GET_JOBS_Success, payload: res.data });
    })
    .catch((err) => dispatch({ type: GET_JOBS_Error }));
};

export const SingalPostRequestUser = (id) => (dispatch) => {
  dispatch({ type: SINGAL_JOB_REQUEST });
  axios
    .get(`${baseURL}/job/${id}`)
    .then((res) => {
      dispatch({ type: SINGAL_JOB_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: SINGAL_JOB_ERROR }));
};
// http://localhost:9001/job/64d31a2c545c9ab0ffc08224/apply
export const ApplyForJobUser = (id, token) => (dispatch) => {
    console.log(id, token,"token from everyone")
    const headers = {
        Authorization: `Bearer ${token}`,
      };
  dispatch({ type: APPLY_JOB_REQUEST });
 return axios.post(`${baseURL}/job/${id}/apply`,null,{ headers})
    .then((res) => {
      dispatch({ type: APPLY_JOB_SUCCESS, payload:res.data.message });
    })
    .catch((err) => dispatch({ type: APPLY_JOB_ERROR, payload:err.data.message }));
};
