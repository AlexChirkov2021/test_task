import React, { useState } from "react";
import TextField from "./textField";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = ({ onAdmin }) => {
  const history = useHistory();
  const [data, setData] = useState({
    login: "",
    password: "",
  });
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.login === "Admin" && data.password === "12345") {
      onAdmin((prevState) => (prevState = !prevState));
      localStorage.setItem("isAdmin", "true");
      history.push(`/profile`);
      toast.success(`Вы успешно вошли в систему!`, {
        autoClose: 1500,
        position: "top-center",
      });
    } else {
      toast.error(`Введите правильный логин или пароль!`, {
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
        value={data.login}
        onChange={handleChange}
      />
      <TextField
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <button
        className="btn btn-primary w-100 mx-auto"
        type="submit"
        // disabled={!isValid}
      >
        Отправить
      </button>
    </form>
  );
};

export default LoginForm;
