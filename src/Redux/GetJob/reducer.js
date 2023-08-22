import { APPLY_JOB_ERROR, APPLY_JOB_REQUEST, APPLY_JOB_SUCCESS, GET_JOBS_Error, GET_JOBS_Request, GET_JOBS_Success, SINGAL_JOB_ERROR, SINGAL_JOB_REQUEST, SINGAL_JOB_SUCCESS } from "./actiontype";


const initialState ={
    isloading: false,
    iserror: false,
    jobdata: [],
    singaljobdata:{},
    sLoading: false,
    sError: false,
    aplyLoading: false,
    aplyError: false,
    aplyMessage:""

}

export const reducer = (state=initialState, {type,payload})=> {
       switch (type) {
        case GET_JOBS_Request:return{...state, isloading:true}
        case GET_JOBS_Success:return{...state, isloading:false, jobdata:payload}
        case GET_JOBS_Error:return {...state, isloading:false, iserror:true}
        //singal page
        case SINGAL_JOB_REQUEST:return{...state, sLoading:true}
        case SINGAL_JOB_SUCCESS:return{...state, sLoading:false, singaljobdata:payload}
        case SINGAL_JOB_ERROR:return {...state, sLoading:false,sError:true}
        //apply job
        case APPLY_JOB_REQUEST:return{...state, aplyLoading:true}
        case APPLY_JOB_SUCCESS:return{...state, aplyLoading:false, aplyMessage:payload}
        case APPLY_JOB_ERROR:return {...state, aplyLoading:false,aplyError:true,aplyMessage:payload }
        
        default:return state
        
       }
}