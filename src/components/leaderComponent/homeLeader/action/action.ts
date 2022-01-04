//firebase
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import db from "../../../../settings/configFirebase/config";

import { DANH_SACH_HIS_DOC_VIDEO, DANH_SACH_TEP_RIENG_TU } from "./type";

const actDanhSachLíchuDocVideoSuccess = (doc: any) => ({
  type: DANH_SACH_HIS_DOC_VIDEO,
  payload: doc,
});

const actDanhSachTepriengTuSuccess = (doc: any) => ({
  type: DANH_SACH_TEP_RIENG_TU,
  payload: doc,
});

export const actDanhSachLichSuDocVideo = () => {
  return (dispatch: any) => {
    const colRef = collection(db, "docVideo");
    getDocs(colRef)
      .then((res) => {
        let arr: { [x: string]: any }[] = [];
        res.docs.forEach((doc) => {
          arr.push({ ...doc.data() });
        });
        dispatch(actDanhSachLíchuDocVideoSuccess(arr));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actDanhSachTepriengTu = () => {
  return (dispatch: any) => {
    const colRef = collection(db, "listSubject");
    getDocs(colRef)
      .then((res) => {
        let arr: { [x: string]: any }[] = [];
        res.docs.forEach((doc) => {
          arr.push({ ...doc.data() });
        });
        dispatch(actDanhSachTepriengTuSuccess(arr));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
