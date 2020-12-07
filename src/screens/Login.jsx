import React from "react";
import { connect } from "react-redux";
import { changeLoginField, cleanLoginFields } from "../store/user/loginReducer";
import { logIn } from "../store/user/authReducer";
import { routerRegister } from "../store/routerReducer";

const Login = ({
  fields,
  changeLoginField,
  cleanLoginFields,
  logIn,
  routerRegister,
}) => {
  return (
    <div className="screen">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          logIn();
        }}
        className="form"
      >
        <h1 className="form__title">Войти</h1>
        <div className="field">
          <label>
            <span className="field__label">Эл. почта: </span>
            <input
              className="field__input"
              type="email"
              value={fields.email}
              name="email"
              onChange={(e) => {
                changeLoginField("email", e.target.value);
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
                changeLoginField("password", e.target.value);
              }}
              required={true}
            />
          </label>
        </div>

        <div className="form__buttons">
          <button className="button" type="submit">
            Войти
          </button>
          <button
            className="button button--text"
            onClick={() => {
              cleanLoginFields();
              routerRegister();
            }}
          >
            Регистрация
          </button>
        </div>
      </form>
    </div>
  );
};

let mapStateToProps = (state) => ({ fields: state.user_login.fields });
export default connect(mapStateToProps, {
  changeLoginField,
  cleanLoginFields,
  logIn,
  routerRegister,
})(Login);
