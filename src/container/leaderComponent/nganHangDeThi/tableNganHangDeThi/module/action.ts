//firebase
import { collection, getDocs } from "firebase/firestore";
import {stores} from "../../../../../settings/configFirebase/config";

import {
  NGAN_HANG_DE_THI_REQUEST,
  NGAN_HANG_DE_THI_SUCCESS,
  NGAN_HANG_DE_THI_ERROR,
} from "./style";

const actNganHangDeThiRequest = () => ({
  type: NGAN_HANG_DE_THI_REQUEST,
});
const actNganHangDeThiSuccess = (e: any) => ({
  type: NGAN_HANG_DE_THI_SUCCESS,
  payload: e,
});
const actNganHangDeThiError = (e: Error) => ({
  type: NGAN_HANG_DE_THI_ERROR,
  payload: e,
});

export const actNganHangDeThi = () => {
  return (dispatch: any) => {
    dispatch(actNganHangDeThiRequest());
    const colRef = collection(stores, "listExam");
    getDocs(colRef)
      .then((res) => {
        let arr: { [x: string]: any }[] = [];
        res.docs.forEach((doc) => {
          arr.push({ ...doc.data() });
        });
        dispatch(actNganHangDeThiSuccess(arr));
      })
      .catch((err) => {
        dispatch(actNganHangDeThiError(err));
      });
  };
};
