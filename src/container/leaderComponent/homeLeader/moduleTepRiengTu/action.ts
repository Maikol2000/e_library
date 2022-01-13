//firebase
import { collection, getDocs } from "firebase/firestore";
import {stores} from "../../../../settings/configFirebase/config";

import {
  DANH_SACH_TEP_RIENG_TU_REQUEST,
  DANH_SACH_TEP_RIENG_TU_SUCCESS,
  DANH_SACH_TEP_RIENG_TU_ERROR,
} from "./type";

const actDanhSachTepriengTuRequest = () => ({
  type: DANH_SACH_TEP_RIENG_TU_REQUEST,
});
const actDanhSachTepriengTuSuccess = (doc: any) => ({
  type: DANH_SACH_TEP_RIENG_TU_SUCCESS,
  payload: doc,
});
const actDanhSachTepriengTuError = (err: any) => ({
  type: DANH_SACH_TEP_RIENG_TU_ERROR,
  payload: err,
});

export const actDanhSachTepriengTu = () => {
  return (dispatch: any) => {
    const colRef = collection(stores, "listSubject");
    dispatch(actDanhSachTepriengTuRequest())
    getDocs(colRef)
      .then((res) => {
        let arr: { [x: string]: any }[] = [];
        res.docs.forEach((doc) => {
          arr.push({ ...doc.data() });
        });
        dispatch(actDanhSachTepriengTuSuccess(arr));
      })
      .catch((err) => {
        dispatch(actDanhSachTepriengTuError(err))
      });
  };
};
