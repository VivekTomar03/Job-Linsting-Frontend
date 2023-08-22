import { DELETE_JOB_ERROR, DELETE_JOB_REQUEST, DELETE_JOB_SUCCESS, GET_ALL_JOBS_Error, GET_ALL_JOBS_Request, GET_ALL_JOBS_Success, POST_NEW_JOB_ERROR, POST_NEW_JOB_REQUEST, POST_NEW_JOB_SUCCESS, UPDATE_JOB_ERROR, UPDATE_JOB_REQUEST, UPDATE_JOB_SUCCESS, VIEW_APPLICATION_SUCCESS } from "./actiontype";


const initialState ={
    isLoading:false,
    isError:false,
    jobarray:[],
    viewuserapplication:[],
    isPostLoad:false,
    isPostError:false,
    postjobmessage:"",
    deletemessage:"",
    isJobDelete:false,
    isDeleteError:false,
   isupdateload:false,
   updatemessage:"",
   isupdateError:false,
}

export const reducer = (state= initialState , {type, payload})=> {
      switch (type) {
        case GET_ALL_JOBS_Request:return{...state, isLoading:true}
        case GET_ALL_JOBS_Success:return{...state, isLoading:false, jobarray:payload}    
        case GET_ALL_JOBS_Error:return{...state, isLoading:false, isError:true}   

        case VIEW_APPLICATION_SUCCESS:return{...state ,viewuserapplication:payload}

        case POST_NEW_JOB_REQUEST:return{...state, isPostLoad:true}
        case POST_NEW_JOB_SUCCESS:return{...state, isPostLoad:false, postjobmessage:payload}
        case POST_NEW_JOB_ERROR:return{...state, isPostLoad:false, isPostError:true}

        case DELETE_JOB_REQUEST:return{...state, isJobDelete:true}
        case DELETE_JOB_SUCCESS:return{...state , isJobDelete:false, deletemessage:payload}
        case DELETE_JOB_ERROR:return{...state, isJobDelete:false, isDeleteError:true}

        case UPDATE_JOB_REQUEST:return{...state, isupdateload:true}
        case UPDATE_JOB_SUCCESS:return{...state, isupdateload:true}
        case UPDATE_JOB_ERROR:return{...state, isupdateload:false,isupdateError:true}
        default:return state
            
      }
}