import React from "react";
import "./stype.css";
import shield from "../../../assets/img/shield.png";
import Frame from "../../../assets/img/Frame-1.png"

// font awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
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
                <FontAwesomeIcon icon={faUserCircle} className="icon1"/>
                <input type="text" className="form-control" />
              </section>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Mật khẩu</label>
              <section>
                <img src={shield} alt="..." className="icon2"/>
                <input type="password" className="form-control" />
              </section>
            </div>
            <p>Quên mật khẩu?</p>
            <button type="submit" className="btn btn-primary">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
