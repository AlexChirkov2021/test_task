import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const NavBar = () => {
  const dispatch = useDispatch();
  const Admin = useSelector((state) => state.admin.admin);
  return (
    <ul className="nav d-flex">
      <div className="p-2  bd-highlight">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">
            Главная
          </Link>
        </li>
      </div>
      <div className="p-2 bd-highlight">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/news">
            Новости
          </Link>
        </li>
      </div>
      <div className="p-2 bd-highlight">
        <li className="nav-item">
          <Link
            className="nav-link "
            aria-current="page"
            to={Admin === true ? "/profile" : "/login"}
          >
            Профиль
          </Link>
        </li>
      </div>
      <div className="p-2 ml-5 bd-highlight">
        {Admin && (
          <li
            className="nav-item"
            onClick={() => {
              dispatch({ type: "SET_ADMIN", payload: false });
              localStorage.setItem("isAdmin", "false");
            }}
          >
            <Link className="nav-link " aria-current="page" to="/">
              Выйти
            </Link>
          </li>
        )}
      </div>
    </ul>
  );
};

export default NavBar;
