import React, { useEffect, useState } from "react";
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
  const [dropMenu, setdropMenu] = useState(false);
  const drop = () => {
    setdropMenu(!dropMenu);
  };

  return (
    <div className="nav__bar">
      <div className="nav__bar_need">
        <img className="img_nav" src={Group} alt="..." />
        <ul
          className="list__item list-group"
          id="list__item list-tab"
          role="tablist"
        >
          <li>
            <NavLink exact to="/page-leader/Trang Chủ" activeClassName="active">
              <img src={home} alt="..." />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/page-leader/Quảng lý học viên/Danh sách môn học"
              activeClassName="active"
            >
              <img src={book} alt="..." />
            </NavLink>
          </li>
          <li>
            <NavLink to="/page-leader/Tệp riêng tư" activeClassName="active">
              <img src={lock} alt="..." />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/page-leader/Ngân hàng đề thi"
              activeClassName="active"
            >
              <img src={bag} alt="..." />
            </NavLink>
          </li>
          <li>
            <NavLink to="/page-leader/Thông báo" activeClassName="active">
              <img src={bell} alt="..." />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/page-leader/Cài đặt hệ thống"
              activeClassName="active"
            >
              <img src={setting} alt="..." />
            </NavLink>
          </li>
          <li>
            <NavLink to="/page-leader/Trợ giúp" activeClassName="active">
              <img src={quession} alt="..." />
            </NavLink>
          </li>
        </ul>
        <div className="menu">
          <ul className="menu__item">
            <li className="home__nav">
              <NavLink exact to="/page-leader/Trang Chủ" activeClassName="active">
                Trang chủ
              </NavLink>
            </li>
            <li className="khoa__hoc__nav">
              <span onClick={drop}>Quản lý khóa học</span>
              <section id={dropMenu ? "menu_drop_true" : "menu_drop_false"}>
                <NavLink
                  to="/page-leader/Quảng lý học viên/Danh sách môn học"
                  activeClassName="active"
                >
                  Danh sách môn học
                </NavLink>
                <NavLink to="/page-leader/Quảng lý học viên/Phê duyệt tài liệu môn học" >
                  Phê duyệt tài liệu môn học
                </NavLink>
              </section>
            </li>
            <li className="lock__nav">
              <NavLink to="/page-leader/Tệp riêng tư" activeClassName="active">
                Tệp riêng tư
              </NavLink>
            </li>
            <li className="bag__nav">
              <NavLink
                to="/page-leader/Ngân hàng đề thi"
                activeClassName="active"
              >
                Ngân hàng đề thi
              </NavLink>
            </li>
            <li className="bell__nav">
              <NavLink to="/page-leader/Thông báo" activeClassName="active">
                Thông báo
              </NavLink>
            </li>
            <li className="set__nav">
              <NavLink
                to="/page-leader/Cài đặt hệ thống"
                activeClassName="active"
              >
                Cài đặt hệ thống
              </NavLink>
            </li>
            <li className="ques__nav">
              <NavLink to="/page-leader/Trợ giúp" activeClassName="active">
                Trợ giúp
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
