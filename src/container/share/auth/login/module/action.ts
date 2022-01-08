import { login } from "../../../../../settings/configFirebase/config";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT } from "./type";

const actLoginRequest = () => ({
  type: LOGIN_REQUEST,
});

const actLoginSuccess = (e: any) => ({
  type: LOGIN_SUCCESS,
  payload: e,
});

const actLoginErr = (e: string) => ({
  type: LOGIN_ERROR,
  payload: e,
});

export const actLogin = (email: any, pass: any) => {
  return (dispatch: any) => {
    dispatch(actLoginRequest());
    login(email, pass)
      .then((res) => {
        dispatch(actLoginSuccess(res.user.email));
      })
      .catch((err) => {
        dispatch(actLoginErr("Không đăng nhập được"));
      });
  };
};

export const actLogout = () => ({
  type: LOG_OUT,
  payload: null,
});
