import {
  ALL_FILE_PRIVATE_ERROR,
  ALL_FILE_PRIVATE_REQUEST,
  ALL_FILE_PRIVATE_SUCCESS,
} from "./type";

const initialState = {
  allFilePrivate: null,
  loading: false,
  error: null,
};

export const allFileReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ALL_FILE_PRIVATE_REQUEST:
      return { ...state, loading: true };
    case ALL_FILE_PRIVATE_SUCCESS:
      return { ...state, loading: false, allFilePrivate: payload, error: null };
    case ALL_FILE_PRIVATE_REQUEST:
      return { ...state, loading: false, allFilePrivate: null, error: payload };

    default:
      return state;
  }
};
