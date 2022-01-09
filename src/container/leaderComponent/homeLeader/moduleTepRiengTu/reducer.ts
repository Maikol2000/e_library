import {
  DANH_SACH_TEP_RIENG_TU_REQUEST,
  DANH_SACH_TEP_RIENG_TU_SUCCESS,
  DANH_SACH_TEP_RIENG_TU_ERROR,
} from "./type";

const initialState = {
  danhSachTepRiengTuDaTaiLenGanDay: null,
  loading: false,
  error: null,
};

const dsTepRiengTuReducer = (state = initialState, { type, payload }:any) => {
  switch (type) {

  case DANH_SACH_TEP_RIENG_TU_REQUEST:
    return { ...state, loading: true}
  case DANH_SACH_TEP_RIENG_TU_SUCCESS:
    return { ...state, loading: false, danhSachTepRiengTuDaTaiLenGanDay: payload, eror: null}
  case DANH_SACH_TEP_RIENG_TU_REQUEST:
    return { ...state, loading: false, danhSachTepRiengTuDaTaiLenGanDay: null, error: payload}

  default:
    return state
  }
}
export default dsTepRiengTuReducer