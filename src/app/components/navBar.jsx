import React from "react";
import { Link } from "react-router-dom";
const NavBar = ({ Admin, onAdmin }) => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/">
          Главная
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/news">
          Новости
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link "
          aria-current="page"
          to={Admin === true ? "/profile" : "/login"}
        >
          Профиль
        </Link>
      </li>
      <li className="nav-item" onClick={() => onAdmin(false)}>
        <Link className="nav-link " aria-current="page" to="/">
          Выйти
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
