import React, { useState } from "react";
import "./style.css";
import Union from "../../../assets/img/Union.png";
import u_eye from "../../../assets/img/u_eye.png";
import visibility_off from "../../../assets/img/visibility_off.png";

export default function ChangePass() {
  const [eye1, seteye1] = useState(true);
  const [eye2, seteye2] = useState(true);
  const [eye3, seteye3] = useState(true);

  const onChangeEye1 = () => {
    seteye1(!eye1);
  };
  const onChangeEye2 = () => {
    seteye2(!eye2);
  };
  const onChangeEye3 = () => {
    seteye3(!eye3);
  };

  return (
    <div>
      <section className="thong_tin_chung">Thông tin chung</section>
      <div className="form_change_info">
        <div className="form_change_pass">
          <div className="form-group custom_form_form_change_info">
            <label className="text_form_group_form_change_info">
              Mật khẩu hiện tại: <span style={{ color: "red" }}>*</span>{" "}
            </label>
            <input type={eye1 ? "password" : "text"} className="form-control" />
            <span className="icon_eye_form_change_info" onClick={onChangeEye1}>
              {eye1 ? (
                <img src={u_eye} alt=".." />
              ) : (
                <img src={visibility_off} alt=".." />
              )}
            </span>
          </div>
          <div className="form-group custom_form_form_change_info">
            <label className="text_form_group_form_change_info">
              Mật khẩu mới: <span style={{ color: "red" }}>*</span>
            </label>
            <input type={eye2 ? "password" : "text"} className="form-control" />
            <span className="icon_eye_form_change_info" onClick={onChangeEye2}>
              {eye2 ? (
                <img src={u_eye} alt=".." />
              ) : (
                <img src={visibility_off} alt=".." />
              )}
            </span>
          </div>
          <div className="form-group custom_form_form_change_info">
            <label className="text_form_group_form_change_info">
              Nhập lại mật khẩu: <span style={{ color: "red" }}>*</span>
            </label>
            <input type={eye3 ? "password" : "text"} className="form-control" />
            <span className="icon_eye_form_change_info" onClick={onChangeEye3}>
              {eye3 ? (
                <img src={u_eye} alt=".." />
              ) : (
                <img src={visibility_off} alt=".." />
              )}
            </span>
          </div>
          <div className="btn_huy_luu_pass">
            <button>Hủy</button>
            <button>Lưu</button>
          </div>
        </div>
        <div className="warn_change_pass">
          <p>
            <img src={Union} alt="..." /> &nbsp; Mật khẩu phải có ít nhất 8 ký tự bao
            gồm:{" "}
          </p>
          <div className="list_text_warn">
            <p>- Chữ cái</p>
            <p>- Số </p>
            <p>- Chữ cái viết hoa </p>
            <p>- Chữ cái viế thường </p>
            <p>- Các ký tự đặc biệt như ! ~ / ) * ^ $ &...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
