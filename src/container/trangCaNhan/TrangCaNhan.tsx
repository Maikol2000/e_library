import { useState } from "react";
import ChangePass from "./changePassword/ChangePass";

import "./style.css";
import InfoPersonal from "./thongTinCaNhan/InfoPersonal";
export default function TrangCaNhan() {
  const [showBtnChinhSua, setshowBtnChinhSua] = useState(true);

  const onChangeShowChinhSua = () => {
    setshowBtnChinhSua(!showBtnChinhSua);
  };

  return (
    <>
      <section className={`${showBtnChinhSua && "thong_tin_ca_nhan_btn"}`}>
        <ul
          className="nav nav-pills custom_btn_trang_ca_nhan justify-content-around"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item item_btn_trang_ca_nhan" role="presentation" onClick={onChangeShowChinhSua}>
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
          <li className="nav-item item_btn_trang_ca_nhan" role="presentation" onClick={onChangeShowChinhSua}>
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
        {showBtnChinhSua && (
          <button onClick={onChangeShowChinhSua} className="chinh__sua">
            Chỉnh sửa
          </button>
        )}
      </section>
      <div className="tab-content item_trang_ca_nhan" id="pills-tabContent">
        <div
          className="tab-pane fade show active position-relative"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <InfoPersonal />
          {!showBtnChinhSua && (
            <div className="btn_change_info">
              <button onClick={onChangeShowChinhSua}>Hủy</button>
              <button onClick={onChangeShowChinhSua}>Lưu</button>
            </div>
          )}
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
    </>
  );
}
