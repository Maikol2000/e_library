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
                to="/page-leader/Trang Ch???"
                activeClassName="active"
              >
                <img src={home} alt="..." />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/page-leader/Qu???ng l?? h???c vi??n/Danh s??ch m??n h???c"
                activeClassName="active"
              >
                <img src={book} alt="..." />
              </NavLink>
            </li>
            <li>
              <NavLink to="/page-leader/Trang ch???/T???p ri??ng t??/T???t c??? c??c t???p" activeClassName="active">
                <img src={lock} alt="..." />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/page-leader/Ng??n h??ng ????? thi"
                activeClassName="active"
              >
                <img src={bag} alt="..." />
              </NavLink>
            </li>
            <li>
              <NavLink to="/page-leader/Th??ng b??o" activeClassName="active">
                <img src={bell} alt="..." />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/page-leader/C??i ?????t h??? th???ng"
                activeClassName="active"
              >
                <img src={setting} alt="..." />
              </NavLink>
            </li>
            <li>
              <NavLink to="/page-leader/Tr??? gi??p" activeClassName="active">
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
                to="/page-leader/Trang Ch???"
                activeClassName="active"
              >
                Trang ch???
              </NavLink>
            </li>
            <li className="khoa__hoc__nav">
              <span onClick={drop}>Qu???n l?? kh??a h???c</span>
              <section id={dropMenu ? "menu_drop_true" : "menu_drop_false"}>
                <NavLink
                  to="/page-leader/Qu???ng l?? h???c vi??n/Danh s??ch m??n h???c"
                  activeClassName="active"
                >
                  Danh s??ch m??n h???c
                </NavLink>
                <NavLink to="/page-leader/Qu???ng l?? h???c vi??n/Ph?? duy???t t??i li???u m??n h???c">
                  Ph?? duy???t t??i li???u m??n h???c
                </NavLink>
              </section>
            </li>
            <li className="lock__nav">
              <NavLink to="/page-leader/Trang ch???/T???p ri??ng t??/T???t c??? c??c t???p" activeClassName="active">
                T???p ri??ng t??
              </NavLink>
            </li>
            <li className="bag__nav">
              <NavLink
                to="/page-leader/Ng??n h??ng ????? thi"
                activeClassName="active"
              >
                Ng??n h??ng ????? thi
              </NavLink>
            </li>
            <li className="bell__nav">
              <NavLink to="/page-leader/Th??ng b??o" activeClassName="active">
                Th??ng b??o
              </NavLink>
            </li>
            <li className="set__nav">
              <NavLink
                to="/page-leader/C??i ?????t h??? th???ng"
                activeClassName="active"
              >
                C??i ?????t h??? th???ng
              </NavLink>
            </li>
            <li className="ques__nav">
              <NavLink to="/page-leader/Tr??? gi??p" activeClassName="active">
                Tr??? gi??p
              </NavLink>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
