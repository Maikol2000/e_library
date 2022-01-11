import React, { useEffect, useState } from "react";
import "./style.css";

//img
import arrow_down_silver from "../../../assets/img/arrow-down-silver.png";
import camera_edit from "../../../assets/img/camera_edit.png";
import ModelChangeImg from "./modelChangeImg/ModelChangeImg";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import Loading from "../../share/loading/Loading";
import SnackbarSuccess from "../../share/snackbar/SnackbarSuccess";

export default function InfoPersonal() {
  const [toast, settoast] = useState(false);

  const { avatar, loading } = useSelector(
    (state: RootState) => state.avatarRduer
  );

  const currentUser = useSelector(
    (state: RootState) => state.authReduser.currentUser
  );

  useEffect(() => {
    if (loading) settoast(true);
    if (!loading) settoast(false);
  }, [loading]);

  return (
    <>
      {loading && <Loading />}
      {toast && <SnackbarSuccess />}
      <section className="thong_tin_chung">Thông tin chung</section>
      <div className="form_change_info">
        <div className="change_img_before_after">
          {avatar ? (
            <img className="custom_avatar" src={avatar} alt="..." />
          ) : (
            <div className="change_img_bg_text">
              <span>H</span>
            </div>
          )}

          <img
            id="form_change_info_icon"
            src={camera_edit}
            alt="..."
            data-toggle="modal"
            data-target="#staticBackdrop"
          />
          <ModelChangeImg />
        </div>
        <form className="form_thong_tin_chung">
          <div className="form_thong_tin_chung_left">
            <div className="form-group form_group_custom_thong_tin_chung">
              <label>Mã người dùng: </label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                defaultValue="CH-121"
              />
            </div>
            <div className="form-group form_group_custom_thong_tin_chung_select">
              <label>Giới tính: </label>
              <div className="form-group">
                <select className="form-control custom_thong_tin_chung_select">
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
                <img src={arrow_down_silver} alt="..." />
              </div>
            </div>
            <div className="form-group form_group_custom_thong_tin_chung">
              <label>Vai trò: </label>
              <input
                type="text"
                className="form-control"
                defaultValue="Quản lý"
              />
            </div>
            <div className="form-group form_group_custom_thong_tin_chung">
              <label>Email: </label>
              <input
                type="email"
                className="form-control"
                defaultValue={currentUser}
              />
            </div>
          </div>
          <div className="form_thong_tin_chung_right">
            <div className="form-group form_group_custom_thong_tin_chung">
              <label>Tên người dùng: </label>
              <input
                type="text"
                className="form-control"
                defaultValue="Lê Cường"
              />
            </div>
            <div className="form-group form_group_custom_thong_tin_chung">
              <label>Số điện thoại: </label>
              <input
                type="tel"
                className="form-control"
                defaultValue="0245544648"
              />
            </div>
            <div className="form-group form_group_custom_thong_tin_chung custom-text-form-for-address">
              <label>Địa chỉ: </label>
              <textarea
                className="form-control"
                id="custom-text-form-for-address-input"
                defaultValue="36/63,dĩ an"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
