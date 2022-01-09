import React from "react";
import { NavLink } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import ChangePass from "./changePassword/ChangePass";

import "./style.css";
import InfoPersonal from "./thongTinCaNhan/InfoPersonal";
export default function TrangCaNhan() {
  return (
    <>
      <div>
        <ul
          className="nav nav-pills mb-3 custom_btn_trang_ca_nhan justify-content-around"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item item_btn_trang_ca_nhan" role="presentation">
            <a
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Thông tin cá nhân
            </a>
          </li>
          <li className="nav-item item_btn_trang_ca_nhan" role="presentation">
            <a
              className="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Thay đổi mật khẩu
            </a>
          </li>
        </ul>
        <div className="tab-content item_trang_ca_nhan" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <InfoPersonal />
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
           <ChangePass />
          </div>
        </div>
      </div>
    </>
  );
}
