import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
//img
import wold from "../../../../assets/img/wold.png";
import minus from "../../../../assets/img/minus.png";
import plus from "../../../../assets/img/plus.png";

import Slider from "@mui/material/Slider";

import Cropper from "react-easy-crop";
import { Area } from "react-easy-crop/types";

import { generateDownload } from "./createImg";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../settings/configFirebase/config";
import InfoPersonal from "../InfoPersonal";
import {
  uploadAvatarSUCCESS,
  uploadAvatarRequest,
  uploadAvatarErr,
} from "./module/action";

export default function ModelChangeImg() {
  const dispatch = useDispatch();
  const [image, SetImage] = useState<any>(null);
  const [avatar, SetAvatar] = useState<any>(null);
  const [croppedArea, SetcroppedArea] = useState<Area | null>(null);
  const [crop, SetCrop] = useState({ x: 0, y: 0 });
  const [zoom, Setzoom] = useState<any>(1);

  //act upload avatar
  const uploadAvatar = (file: File) => {
    const storageRef = ref(storage, `${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      () => {},
      (err) => console.log(err),
      () => {
        dispatch(uploadAvatarRequest());
        getDownloadURL(uploadTask.snapshot.ref)
          .then((res) => {
            dispatch(uploadAvatarSUCCESS(res));
          })
          .catch((err) => {
            dispatch(uploadAvatarSUCCESS(err));
          });
      }
    );
  };

  const onChangeUplaodFile = () => {
    uploadAvatar(avatar);
  };

  const onChangeImg = (e: any) => {
    const fileRender = new FileReader();
    fileRender.readAsDataURL(e.target.files[0]);
    fileRender.addEventListener("load", () => {
      SetImage(fileRender.result);
    });
    SetAvatar(e.target.files[0]);
  };

  const onCropComplete = (
    croppedAreaPercentage: Area,
    croppedAreaPixels: Area
  ) => {
    SetcroppedArea(croppedAreaPixels);
  };

  const onCompleteImg = () => {
    generateDownload(image, croppedArea);
  };
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content custom_model_for_md_change_img">
            <div className="modal-body">
              <h3 className="text_tai_anh_len">Tải lên ảnh đại diện</h3>
              <p className="warn_text_model_change">
                <img src={wold} alt="..." /> {"  "} Ảnh đại diện của học viên sẽ
                hiển thị công khai.
              </p>
              <div className="custom_img_model_change">
                <Cropper
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={SetCrop}
                  onZoomChange={Setzoom}
                  onCropComplete={onCropComplete}
                />
              </div>
              <div className="custom_range_model_change">
                <img src={minus} alt="..." />
                <Slider
                  size="small"
                  aria-label="Small"
                  value={zoom}
                  onChange={(e, zoom) => Setzoom(zoom)}
                />
                <img src={plus} alt="..." />
              </div>
              <div className="custom_file_model_change">
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  onChange={onChangeImg}
                />
                <label htmlFor="file">Chọn tệp tải lên</label>
              </div>
            </div>
            <div className="custom_btn_model_change">
              <button type="button" data-dismiss="modal">
                Hủy
              </button>
              <button type="button" onClick={onChangeUplaodFile}>
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
