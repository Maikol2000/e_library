import { useState } from "react";
import { useDispatch } from "react-redux";
import "./style.css";
//img
import shield from "../../../../../assets/img/shield.png";

// font awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import { actLogin } from "../module/action";
import { useHistory } from "react-router-dom";

export default function LoginMain() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [auth, setauth] = useState<any>({ email: "", password: "" });

  const login = (e: any) => {
    e.preventDefault();
    const { email, password } = auth;
    dispatch(actLogin(email, password));
  };

  return (
    <>
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
              onChange={(e) => setauth({ ...auth, password: e.target.value })}
              type="password"
              className="form-control"
            />
          </section>
        </div>
        <p onClick={() => history.push("/login/reset-password")}>
          Quên mật khẩu?
        </p>
        <button onClick={login} type="button" className="btn btn-primary">
          Đăng nhập
        </button>
      </form>
    </>
  );
}
