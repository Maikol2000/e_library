import { collection, getDocs } from "firebase/firestore";
import { stores } from "../../../../../../../settings/configFirebase/config";

import {
  DOC_SUBJECT_REQUEST,
  DOC_SUBJECT_SUCCSESS,
  DOC_SUBJECT_ERROR,
} from "./type";

const actDanhSachTaiLieuRequest = () => ({
  type: DOC_SUBJECT_REQUEST,
});

const actDanhSachTaiLieuSuccess = (e: any) => ({
  type: DOC_SUBJECT_SUCCSESS,
  payload: e,
});

const actDanhSachTaiLieuError = (e: Error) => ({
  type: DOC_SUBJECT_ERROR,
  payload: e,
});

export const actDanhSachTaiLieu = () => {
  return (dispatch: any) => {
    const colRef = collection(stores, "listDocSubject");
    dispatch(actDanhSachTaiLieuRequest());
    getDocs(colRef)
      .then((res) => {
        let arr: { [x: string]: any }[] = [];
        res.docs.forEach((doc) => {
          arr.push({ ...doc.data() });
        });
        dispatch(actDanhSachTaiLieuSuccess(arr));
      })
      .catch((err) => {
        dispatch(actDanhSachTaiLieuError(err));
      });
  };
};
