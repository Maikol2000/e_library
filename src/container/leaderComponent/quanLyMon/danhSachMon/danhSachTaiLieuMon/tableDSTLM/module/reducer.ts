
import {
    DOC_SUBJECT_REQUEST,
    DOC_SUBJECT_SUCCSESS,
    DOC_SUBJECT_ERROR,
  } from "./type";

const initialState = {
    dsTaiLieuMonReducer: null,
    loading:false,
    error: null
}

export const dsTaiLieuMonReducer = (state = initialState, { type, payload }:any) => {
    switch (type) {

    case DOC_SUBJECT_REQUEST:
        return { ...state, loading:true}
    case DOC_SUBJECT_SUCCSESS:
        return { ...state, loading:false, dsTaiLieuMonReducer: payload, error:null}
    case DOC_SUBJECT_ERROR:
        return { ...state, loading:false, dsTaiLieuMonReducer: null, error:payload}

    default:
        return state
    }
}
