import { DANH_SACH_HIS_DOC_VIDEO } from "./type";

const initialState = {
  danhSachLichSuTaiLieu: [],
};

export const danhSachLichSuVideoReducer = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case DANH_SACH_HIS_DOC_VIDEO:
      return { ...state, danhSachLichSuTaiLieu: payload };

    default:
      return state;
  }
};
