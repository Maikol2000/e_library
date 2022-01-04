import { DANH_SACH_HIS_DOC_VIDEO, DANH_SACH_TEP_RIENG_TU } from "./type";

const initialState = {
  danhSachLichXuTaiLieu: [],
  danhSachTepRiengTuDaTaiLenGanDay: [],
};

export const homeLeaderReducer = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case DANH_SACH_HIS_DOC_VIDEO:
      return { ...state, danhSachLichXuTaiLieu: payload };
    case DANH_SACH_TEP_RIENG_TU:
      return { ...state, danhSachTepRiengTuDaTaiLenGanDay: payload };

    default:
      return state;
  }
};
