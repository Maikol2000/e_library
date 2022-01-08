import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT } from "./type";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const authReduser = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, currentUser: payload, loading: false };
    case LOGIN_ERROR:
      return { ...state, error: payload, loading: false, currentUser:null };
    case LOG_OUT:
      return { ...state, currentUser: payload };

    default:
      return state;
  }
};
