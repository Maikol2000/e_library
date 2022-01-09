import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./stype.css";

import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

//img
import shield from "../../../../assets/img/shield.png";
import Frame from "../../../../assets/img/Frame-1.png";

// font awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { actLogin } from "./module/action";
import { RootState } from "../../../../store/store";
import Loading from "../../loading/Loading";
import { Redirect } from "react-router-dom";
import LoginMain from "./loginMain/LoginMain";
import RsPass from "./resetPassword/RsPass";

export default function Login() {
  const loading = useSelector((state: RootState) => state.authReduser.loading);
  const currentUser = useSelector(
    (state: RootState) => state.authReduser.currentUser
  );

  if (Boolean(currentUser)) return <Redirect to="/page-leader/Trang Chủ" />;
  if (loading) return <Loading />;

  return (
    <>
      <div className="login__bg">
        <img src={Frame} alt="..." />
        <div className="form__login">
            <Switch>
              <Route exact path="/login" component={LoginMain} />
              <Route path="/login/reset-password" component={RsPass} />
            </Switch>
        </div>
      </div>
    </>
  );
}
function state(state: any, arg1: (RootState: unknown) => any) {
  throw new Error("Function not implemented.");
}
