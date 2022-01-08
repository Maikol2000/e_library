import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./stype.css";
//img
import shield from "../../../../assets/img/shield.png";
import Frame from "../../../../assets/img/Frame-1.png";

// font awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { actLogin } from "./module/action";
import { RootState } from "../../../../store/store";
import Loading from "../loading/Loading";
import { Redirect } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const [auth, setauth] = useState<any>({ email: "", password: "" });

  const login = (e: any) => {
    e.preventDefault();
    const { email, password } = auth;
    dispatch(actLogin(email, password));
  };
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
          <h1>Đăng nhập</h1>
          <form>
            <div className="form-group">
              <label>Tên đăng nhập</label>
              <section>
                <FontAwesomeIcon icon={faUserCircle} className="icon1" />
                <input
                  name="email"
                  onChange={(e) => setauth({ ...auth, email: e.target.value })}
                  type="text"
                  className="form-control"
                />
              </section>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Mật khẩu</label>
              <section>
                <img src={shield} alt="..." className="icon2" />
                <input
                  name="password"
                  onChange={(e) =>
                    setauth({ ...auth, password: e.target.value })
                  }
                  type="password"
                  className="form-control"
                />
              </section>
            </div>
            <p>Quên mật khẩu?</p>
            <button onClick={login} type="button" className="btn btn-primary">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
function state(state: any, arg1: (RootState: unknown) => any) {
  throw new Error("Function not implemented.");
}
