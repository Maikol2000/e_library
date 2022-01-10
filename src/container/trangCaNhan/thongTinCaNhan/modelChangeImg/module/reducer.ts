import {
  FILE_AVATAR_REQUEST,
  FILE_AVATAR_SUCCESS,
  FILE_AVATAR_ERROR,
} from "./type";

const initialState = {
  avatar: null,
  loading: false,
  error: null,
};

export const avatarRduer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case FILE_AVATAR_REQUEST:
      return { ...state, loading: true };
    case FILE_AVATAR_SUCCESS:
      return { ...state, loading: false, avatar: payload, error: null };
    case FILE_AVATAR_ERROR:
      return { ...state, loading: false, avatar: null, error: payload };

    default:
      return state;
  }
};
