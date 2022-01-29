import React from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import "./styles.css";
// import Courses from "./components/courses";
// import Popular from "./components/popular";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthContext from "./contexts/AuthContext";
import Cookies from "js-cookie";
import { API_URL } from "./utils";
import axios from "axios";

function App(props) {
  const [user, setUser] = useState(null);

  const token = window.localStorage.getItem("token");

  const getUser = () => {
    if (token) {
      axios
        .get(`${API_URL}/api/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          setUserInfo(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  //https://strapi.io/blog/nextjs-react-hooks-strapi-auth-4
  //https://github.com/MariaRaykova/newdesire/blob/fb66b80ecedd3e746f337ecc12c3c4ed9d529ed1/src/App.js

  useEffect(() => {
    getUser();
  }, []);

  const setUserInfo = (user) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        isAuthenticated: !!user,
        setUser: setUserInfo
      }}
    >
      <div id="app">{props.children}</div>;
    </AuthContext.Provider>
  );
}
export default App;
