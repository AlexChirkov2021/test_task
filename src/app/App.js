import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./layouts/main";
import Profile from "./layouts/profile";
import NavBar from "./components/navBar";
import News from "./layouts/news";
import Login from "./layouts/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [Admin, setAdmin] = useState(false);
  return (
    <div className="App">
      <NavBar Admin={Admin} onAdmin={setAdmin} />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/news" component={News} />
        <Route
          path="/login"
          render={() => <Login Admin={Admin} onAdmin={setAdmin} />}
        />
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
