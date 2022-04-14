import {
  NGAN_HANG_DE_THI_REQUEST,
  NGAN_HANG_DE_THI_SUCCESS,
  NGAN_HANG_DE_THI_ERROR,
} from "./style";

const initialState = {
  dsNganHangDeThi: null,
  loading: false,
  error: null,
};

export const dsNganHangDeThiReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case NGAN_HANG_DE_THI_REQUEST:
      return { ...state, loading: true };
    case NGAN_HANG_DE_THI_SUCCESS:
      return {
        ...state,
        loading: false,
        dsNganHangDeThi: payload,
        error: null,
      };
    case NGAN_HANG_DE_THI_ERROR:
      return {
        ...state,
        loading: false,
        dsNganHangDeThi: null,
        error: payload,
      };

    default:
      return state;
  }
};
