//firebase
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../../../settings/configFirebase/config";

import { DANH_SACH_HIS_DOC_VIDEO } from "./type";

const actDanhSachLíchuDocVideoSuccess = (doc: any) => ({
  type: DANH_SACH_HIS_DOC_VIDEO,
  payload: doc,
});

export const actDanhSachLíchuDocVideo = () => {
  return (dispatch: any) => {
    try {
      onSnapshot(collection(db, "docVideo"), (items) => {
        const arr = items.docs.map((r) => r.data());
        dispatch(actDanhSachLíchuDocVideoSuccess(arr));
      });
    } catch (error) {
      console.log(error);
    }
  };
};
