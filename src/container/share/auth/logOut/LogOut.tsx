import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./style.css";

import { RootState } from "../../../../store/store";

import user from "../../../../assets/img/user.png";
import { actLogout } from "../login/module/action";

export default function LogOut() {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = useSelector(
    (state: RootState) => state.authReduser.currentUser
  );

  const logOut = () => {
    dispatch(actLogout());
  };

  return (
    <section className="log_out_main">
      <section
        onClick={() => history.push("/page-leader/Thông tin cá nhân")}
        className="log_in_out"
      >
        {email && <img src={user} alt="..." />}
        <span>{email}</span>
      </section>
      <section className="btn_log_out">
        {email ? (
          <a onClick={logOut}>Đăng xuất</a>
        ) : (
          <a onClick={() => history.push("/login")}>Đăng nhập</a>
        )}
      </section>
    </section>
  );
}
