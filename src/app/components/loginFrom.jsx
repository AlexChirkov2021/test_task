import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "./textField";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = () => {
  const login = useSelector((state) => state.form.login);
  const user = useSelector((state) => state.users);
  const password = useSelector((state) => state.form.password);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleChangeLogin = (target) => {
    dispatch({ type: "SET_LOGIN", payload: target.value });
  };

  const handleChangePassword = (target) => {
    dispatch({ type: "SET_PASSWORD", payload: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login === user.login && password === user.password && user.isAdmin) {
      dispatch({ type: "SET_ADMIN", payload: true });
      localStorage.setItem("isAdmin", "true");
      history.push(`/profile`);
      toast.success(`Вы успешно вошли в систему!`, {
        autoClose: 1500,
        position: "top-center",
      });
    } else {
      toast.error(`Имя пользователя или пароль введены не верно!`, {
        autoClose: 1500,
        position: "top-center",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Логин"
        name="login"
        value={login}
        onChange={handleChangeLogin}
      />
      <TextField
        label="Пароль"
        type="password"
        name="password"
        value={password}
        onChange={handleChangePassword}
      />
      <button className="btn btn-primary w-100 mx-auto" type="submit">
        Отправить
      </button>
    </form>
  );
};

export default LoginForm;
