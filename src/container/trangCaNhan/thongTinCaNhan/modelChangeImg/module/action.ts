import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../../settings/configFirebase/config";

import {
  FILE_AVATAR_ERROR,
  FILE_AVATAR_REQUEST,
  FILE_AVATAR_SUCCESS,
} from "./type";

export const uploadAvatarRequest = () => ({
  type: FILE_AVATAR_REQUEST,
});

export const uploadAvatarSUCCESS = (e: any) => ({
  type: FILE_AVATAR_SUCCESS,
  payload: e,
});

export const uploadAvatarErr = (err: Error) => ({
  type: FILE_AVATAR_ERROR,
  payload: err,
});
