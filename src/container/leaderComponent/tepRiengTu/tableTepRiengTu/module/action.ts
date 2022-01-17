import { collection, getDocs } from "firebase/firestore";
import { stores } from "../../../../../settings/configFirebase/config";

import {
  ALL_FILE_PRIVATE_ERROR,
  ALL_FILE_PRIVATE_REQUEST,
  ALL_FILE_PRIVATE_SUCCESS,
} from "./type";

const actAllFileRequest = () => ({
    type: ALL_FILE_PRIVATE_REQUEST
})

const actAllFileSuccess = (e:any) => ({
    type: ALL_FILE_PRIVATE_SUCCESS,
    payload: e
})

const actAllFileEror = (e:Error) => ({
    type: ALL_FILE_PRIVATE_ERROR,
    payload: e
})

export const actAllFile = () => {
    return (dispatch: any) => {
        const colRef = collection(stores, "allFilePrivate");
        dispatch(actAllFileRequest());
        getDocs(colRef)
          .then((res) => {
            let arr: { [x: string]: any }[] = [];
            res.docs.forEach((doc) => {
              arr.push({ ...doc.data() });
            });
            dispatch(actAllFileSuccess(arr));
          })
          .catch((err) => {
            dispatch(actAllFileEror(err));
          });
      };
}