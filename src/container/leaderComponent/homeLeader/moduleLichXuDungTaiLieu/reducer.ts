import {
  DANH_SACH_HIS_DOC_VIDEO_REQUEST,
  DANH_SACH_HIS_DOC_VIDEO_SUCCESS,
  DANH_SACH_HIS_DOC_VIDEO_ERROR
} from "./type";



const initialState = {
  danhSachLichXuDungTaiLieu: null,
  loading: false,
  error: null,
};

export const dsLichXuDungTaiLieuReducer = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case DANH_SACH_HIS_DOC_VIDEO_REQUEST:
      return { ...state, loading: true };
    case DANH_SACH_HIS_DOC_VIDEO_SUCCESS:
      return { ...state, danhSachLichXuDungTaiLieu: payload, loading: false };
    case DANH_SACH_HIS_DOC_VIDEO_ERROR:
      return {
        ...state,
        danhSachLichXuDungTaiLieu: null,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
