import React from "react";

import "./style.css";

import u_check_circle from "../../../assets/img/u_check-circle.png";

export default function SnackbarSuccess() {
  return (
    <div className="snackbar">
      <div className="snackbar_custom">
        <img src={u_check_circle} alt="..." />
        <span>cập nhật ảnh đại diện thành công</span>
      </div>
    </div>
  );
}
