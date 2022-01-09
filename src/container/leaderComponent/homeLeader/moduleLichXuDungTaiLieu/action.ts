//firebase
import { collection, getDocs } from "firebase/firestore";
import {stores} from "../../../../settings/configFirebase/config";

import {
  DANH_SACH_HIS_DOC_VIDEO_REQUEST,
  DANH_SACH_HIS_DOC_VIDEO_SUCCESS,
  DANH_SACH_HIS_DOC_VIDEO_ERROR,
} from "./type";

const actDanhSachLíchuDocVideoRequest = () => ({
  type: DANH_SACH_HIS_DOC_VIDEO_REQUEST,
});
const actDanhSachLíchuDocVideoSuccess = (doc: any) => ({
  type: DANH_SACH_HIS_DOC_VIDEO_SUCCESS,
  payload: doc,
});
const actDanhSachLíchuDocVideoError = (err: any) => ({
  type: DANH_SACH_HIS_DOC_VIDEO_ERROR,
  payload: err,
});

export const actDanhSachLichSuDocVideo = () => {
  return (dispatch: any) => {
    dispatch(actDanhSachLíchuDocVideoRequest());
    const colRef = collection(stores, "docVideo");
    getDocs(colRef)
      .then((res) => {
        let arr: { [x: string]: any }[] = [];
        res.docs.forEach((doc) => {
          arr.push({ ...doc.data() });
        });
        dispatch(actDanhSachLíchuDocVideoSuccess(arr));
      })
      .catch((err) => {
        dispatch(actDanhSachLíchuDocVideoError(err));
      });
  };
};
