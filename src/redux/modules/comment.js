import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import apis from '../../api/main'

const initialState={
  commentList:[],
}

const SERVER_REQ="user/SERVER_REQ"  // loading check
const REQ_SUCCESS="user/REQ_SUCCESS"; // login check
const REQ_ERROR="user/REQ_ERROR"; // error check

const ADD="comment/ADD";
const LOAD="comment/LOAD";
const EDIT="comment/EDIT";
const DELETE="comment/DELETE";

export function serverReq(payload){
  return{type:SERVER_REQ,payload}
}
export function reqSucess(payload){
  return{type:REQ_SUCCESS,payload}
}
export function reqError(payload){
  return{type:REQ_ERROR,payload}
}

export function Add(payload){
  return{type:ADD,payload}
}
export function Load(payload){
  return{type:LOAD,payload}
}
export function Edit(payload){
  return{type:EDIT,payload}
}
export function Delete(payload){
  return{type:DELETE,payload}
}


export const __postComment=(payload)=>{
  console.log(payload)
  return async function(dispatch,getState){
    try{
      dispatch(serverReq(true));
      const postComment = await apis.postComment(payload)
      dispatch(Add(postComment))
      console.log(postComment);
    } 
    catch(error){
      dispatch(reqError(true));
      console.log(error);
      alert("Posting Denied!!!")
    }
    finally{
      dispatch(serverReq(false));
    }
  }
}


// export const __getComment=(payload)=>{
//   return async function(dispatch,getState){
//     try{
//       dispatch(serverReq(true));
//       const {data} = await apis.getComments(payload.board_id);
//       dispatch(Load({data}));
//       }
//       catch(error){
//         dispatch(reqError(true));
//         console.log(error)
//         alert("Can't get CommentList!!")
//       }
//       finally{
//         dispatch(serverReq(false));
//     }
//   }
// }


export const __deleteComment=(payload)=>{
  return async function(dispatch,getState){
    dispatch(serverReq(true))
    try{
      await apis.deleteComment(payload);
      alert("Your Comment has been Deleted")
    }
    catch(error){
      dispatch(reqError(true));
      alert("Comment Delete Error")
    }
    finally{
      dispatch(serverReq(false))
    }
  }
}


export const __deleteComments=(payload)=>{
  console.log(payload.board_id);
  return async function(dispatch,getState){
    dispatch(serverReq(true))
    try{
      await apis.deleteComment(payload);
      alert("Your Comment has been Deleted")
    }
    catch(error){
      dispatch(reqError(true));
      alert("Comment Delete Error")
    }
    finally{
      dispatch(serverReq(false))
    }
  }
}

export const __editComment=(payload)=>{
  console.log(payload);
  return async function(dispatch,getState){
    dispatch(serverReq(true));
    try{
      const editComment= await apis.putComment(payload)
    }
    catch(error){
      dispatch(reqError(true))
    }
    finally{
      dispatch(serverReq(false))
    }
  }
}


function comment(state=initialState,action){
  switch(action.type)
  {
    case ADD: return{...state,commentList:[...state.commentList]};
    case LOAD: return{...state,commentList:action.payload};
    case EDIT: return{};
    case DELETE: return{};
    case REQ_SUCCESS:{
      return{...state,login:action.payload};
    }
    case REQ_ERROR:{
      return{...state,error:action.payload}
    }
    case SERVER_REQ:{
      return{...state,loading:action.payload}
    }
    default: return{...state};
  }
}

export default comment;