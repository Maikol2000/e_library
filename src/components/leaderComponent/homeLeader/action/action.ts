//firebase
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import db from "../../../../settings/configFirebase/config";

import { DANH_SACH_HIS_DOC_VIDEO } from "./type";

const actDanhSachLíchuDocVideoSuccess = (doc: any) => ({
  type: DANH_SACH_HIS_DOC_VIDEO,
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
