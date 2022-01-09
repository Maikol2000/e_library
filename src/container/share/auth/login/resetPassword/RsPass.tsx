import { useState } from "react";
import { useDispatch } from "react-redux";
import "./style.css";
//img
import arrow_left from "../../../../../assets/img/arrow_left.png";

// font awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import { actLogin } from "../module/action";
import { useHistory } from "react-router-dom";

export default function RsPass() {
  const dispatch = useDispatch();
  const history = useHistory()
  const [auth, setauth] = useState<any>({ email: "", password: "" });

  const login = (e: any) => {
    e.preventDefault();
    const { email, password } = auth;
    dispatch(actLogin(email, password));
  };

  return (
    <>
      <h1>Cấp lại mật khẩu</h1>
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
          <label htmlFor="exampleInputPassword1">Mã xác thực</label>
          <section>
            <input
              name="password"
              onChange={(e) => setauth({ ...auth, password: e.target.value })}
              type="password"
              className="form-control"
            />
          </section>
        </div>
        <div className="rs_img_p">
          <div className="rs_img">
            <img src={arrow_left} alt="..." />
          </div>
          <div className="rs_p">
            <p onClick={() => history.push("/login")}> Quay lại trang chủ</p>
          </div>
        </div>
        <button onClick={login} type="button" className="btn btn-primary">
          Đăng nhập
        </button>
      </form>
    </>
  );
}
