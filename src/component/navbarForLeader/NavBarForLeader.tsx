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

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function NavBarNavBarForLeader() {
  const [dropMenu, setdropMenu] = useState(false);
  const [nav, setnav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const drop = () => {
    setdropMenu(!dropMenu);
  };

  const navBar = document.querySelector(".nav__bar_need");
  const navBarMenu = document.querySelector(".menu");

  const activeNav = () => {
    setnav(!nav);
    navBar?.classList.toggle("activeNav");
    navBarMenu?.classList.toggle("activeNav");
  };

  const onChangeNav = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", onChangeNav);

  if (window.scrollY > 100) {
    navBar?.classList.toggle("scrollNav");
  } else {
    navBar?.classList.remove("scrollNav");
  }

  return (
    <>
      <div className="nav__bar">
        <section className="nav__bar_need" style={{ transition: "all 0.5s" }}>
          <section className="navBarForMobile" onClick={activeNav}>
            {!nav ? <Icon icon={faBars} /> : <Icon icon={faTimes} />}
          </section>
          <img className="img_nav" src={Group} alt="..." />
          <ul
            className="list__item list-group"
            id="list__item list-tab"
            role="tablist"
          >
            <li>
              <NavLink
                exact
                to="/page-leader/Trang Chủ"
                activeClassName="active"
              >
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
              <NavLink to="/page-leader/Trang chủ/Tệp riêng tư/Tất cả các tệp" activeClassName="active">
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
        </section>
        <section className="menu">
          <ul className="menu__item">
            <li className="home__nav">
              <NavLink
                exact
                to="/page-leader/Trang Chủ"
                activeClassName="active"
              >
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
                <NavLink to="/page-leader/Quảng lý học viên/Phê duyệt tài liệu môn học">
                  Phê duyệt tài liệu môn học
                </NavLink>
              </section>
            </li>
            <li className="lock__nav">
              <NavLink to="/page-leader/Trang chủ/Tệp riêng tư/Tất cả các tệp" activeClassName="active">
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
        </section>
      </div>
    </>
  );
}
