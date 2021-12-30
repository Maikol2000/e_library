import React from "react";
import Group from "../../assets/img/imgCon.png";
import "./stype.css";

import { NavLink } from "react-router-dom";

//icon
import home from "../../assets/img/home_outline.png";
import bell from "../../assets/img/fi_bell.png";
import setting from "../../assets/img/fi_settings.png";
import bag from "../../assets/img/u_bag.png";
import book from "../../assets/img/u_book-open.png";
import quession from "../../assets/img/u_comment-question.png";
import lock from "../../assets/img/u_file-lock-alt.png";

interface LeaderProps {}

export default function NavBarNavBarForLeader(props: LeaderProps) {
  return (
    <div className="nav__bar">
      <div className="nav__bar_need">
        <img className="img_nav" src={Group} alt="..." />
        <ul className="list__item" id="list__item">
          <li>
            <NavLink to="/page-leader">
              <img src={home} alt="..." />
              <div className="bg__hover__item" id="bg__hover__item"></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/page-leader/danh-sach-mon">
              <img src={book} alt="..." />
              <div className="bg__hover__item"></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/page-leader/phe-duyet-tai-lieu">
              <img src={lock} alt="..." />
              <div className="bg__hover__item"></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/page-leader/ngan-hang-de-thi">
              <img src={bag} alt="..." />
              <div className="bg__hover__item"></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/page-leader/thong-bao">
              <img src={bell} alt="..." />
              <div className="bg__hover__item"></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/page-leader/cai-dat-he-thong">
              <img src={setting} alt="..." />
              <div className="bg__hover__item"></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/page-leader/tro-giup">
              <img src={quession} alt="..." />
              <div className="bg__hover__item"></div>
            </NavLink>
          </li>
        </ul>
        <div className="menu">
          <ul>
            <li className="home__nav">
              <img src={home} alt="..." />
              <span>Trang chủ</span>
            </li>
            <li className="khoa__hoc__nav">
              <img src={book} alt="..." />
              <span>Quản lý khóa học</span>
            </li>
            <li className="lock__nav">
              <img src={lock} alt="..." />
              <span>Tệp riêng tư</span>
            </li>
            <li className="bag__nav">
              <img src={bag} alt="..." />
              <span>Ngân hàng đề thi</span>
            </li>
            <li className="bell__nav">
              <img src={bell} alt="..." />
              <span>Thông báo</span>
            </li>
            <li className="set__nav">
              <img src={setting} alt="..." />
              <span>Cài đặt hệ thống</span>
            </li>
            <li className="ques__nav">
              <img src={quession} alt="..." />
              <span>Trợ giúp</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
