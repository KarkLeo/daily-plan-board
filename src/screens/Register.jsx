import React from "react";
import { connect } from "react-redux";
import {
  changeRegisterField,
  cleanRegisterFields,
} from "../store/user/registerReducer";
import { registration } from "../store/user/authReducer";
import { routerLogin } from "../store/routerReducer";

const Register = ({
  fields,
  changeRegisterField,
  cleanRegisterFields,
  registration,
  routerLogin,
}) => {
  return (
    <div className="screen">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          registration();
        }}
      >
        <h1 className="form__title">Register</h1>
        <div className="field">
          <label>
            <span className="field__label">Полное имя: </span>
            <input
              className="field__input"
              type="text"
              value={fields.fullName}
              name="fullName"
              onChange={(e) => {
                changeRegisterField("fullName", e.target.value);
              }}
              required={true}
            />
          </label>
        </div>
        <div className="field">
          <label>
            <span className="field__label">Эл. почта: </span>
            <input
              className="field__input"
              type="email"
              value={fields.email}
              name="email"
              onChange={(e) => {
                changeRegisterField("email", e.target.value);
              }}
              required={true}
            />
          </label>
        </div>
        <div className="field">
          <label>
            <span className="field__label">Пароль: </span>
            <input
              className="field__input"
              type="password"
              value={fields.password}
              name="password"
              onChange={(e) => {
                changeRegisterField("password", e.target.value);
              }}
              required={true}
            />
          </label>
        </div>
        <div className="field">
          <label>
            <span className="field__label">Повторить пароль: </span>
            <input
              className="field__input"
              type="password"
              value={fields.repeatPassword}
              name="repeatPassword"
              onChange={(e) => {
                changeRegisterField("repeatPassword", e.target.value);
              }}
              required={true}
            />
          </label>
        </div>

        <div className="form__buttons">
          <button className="button" type="submit">
            Регистрация
          </button>
          <button
            className="button button--text"
            onClick={() => {
              cleanRegisterFields();
              routerLogin();
            }}
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};

let mapStateToProps = (state) => ({ fields: state.user_register.fields });
export default connect(mapStateToProps, {
  changeRegisterField,
  cleanRegisterFields,
  registration,
  routerLogin,
})(Register);
