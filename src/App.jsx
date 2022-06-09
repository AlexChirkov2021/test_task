import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./app/layouts/main";
import Profile from "./app/layouts/profile";
import NavBar from "./app/components/navBar";
import News from "./app/layouts/news";
import Login from "./app/layouts/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("isAdmin") === "true") {
      dispatch({ type: "SET_ADMIN", payload: true });
    } else {
      localStorage.setItem("isAdmin", "false");
      dispatch({ type: "SET_ADMIN", payload: false });
    }
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/news" component={News} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
