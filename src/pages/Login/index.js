import React, { useState, useEffect, useContext } from "react";
// import getTest from "../../utils/query";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
// import "./quiz-styles.css";
import PageWrapper from "../../components/PageWrapper";
import { API_URL } from "../../utils";
//import { queryCourse } from "../../utils/query";
import AuthContext from "../../contexts/AuthContext";

const Login = () => {
  const authContext = useContext(AuthContext);
  const history = useNavigate();
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    if (authContext.isAuthenticated) {
      history("/"); // redirect if you're already logged in
    }
  }, []);
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const showError = () => {
    if (error) {
      return <div className="error">*{error}</div>;
    }
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const logInHandler = (identifier, password) => {
    //prevent function from being ran on the server
    if (typeof window === "undefined") {
      return;
    }

    return new Promise((resolve, reject) => {
      axios
        .post(`${API_URL}/api/auth/local`, { identifier, password })
        .then((res) => {
          console.log("res " + JSON.stringify(res));
          //set token response from Strapi for server validation
          // Cookies.set("token", res.data.jwt);
          window.localStorage.setItem("token", res.data.jwt);
          //resolve the promise to set loading to false in SignUp form
          resolve(res);
        })
        .catch((error) => {
          //reject the promise and pass the error object back to the form
          reject(error);
        });
    });
  };
  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword
  //   });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };
  const onLoginSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const identifier = values.email;
    const password = values.password;
    if (!identifier.match(mailFormat)) {
      setError("You have entered an invalid email address!");
    } else {
      logInHandler(identifier, password)
        .then((data) => {
          setLoading(false);
          // set authed User in global context to update header/app state
          authContext.setUser(data.user);
          //redirect back to home page for restaurance selection
          history("/");
        })
        .catch((err) => {
          setError("Invalid Username or Password");
        });
    }
  };

  return (
    <PageWrapper>
      <div class="login">
        <div class="login-container">
          <div class="d-flex justify-content-center h-100">
            <div class="login-card">
              <div class="login-card-header">
                <h3>Sign In</h3>
                <div class="d-flex justify-content-end social_icon">
                  <span>
                    <i class="fab fa-facebook-square"></i>
                  </span>
                  <span>
                    <i class="fab fa-google-plus-square"></i>
                  </span>
                  <span>
                    <i class="fab fa-twitter-square"></i>
                  </span>
                </div>
              </div>
              <div class="login-card-body">
                <form onSubmit={onLoginSubmitHandler}>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fas fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="email"
                      value={values.email}
                      onChange={handleChange("email")}
                    />
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fas fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="password"
                      value={values.password}
                      onChange={handleChange("password")}
                      required
                    />
                  </div>
                  <div class="row align-items-center remember">
                    <input type="checkbox" />
                    Remember Me
                  </div>
                  <div class="form-group">
                    <input
                      type="submit"
                      // value="Login"
                      class="btn float-right login_btn"
                    />
                    {/* {loading ? "Loading... " : "Login"} */}
                    {/* </input> */}
                  </div>
                </form>
              </div>
              <div class="login-card-footer">
                <div class="d-flex justify-content-center login-links">
                  Don't have an account?
                  <Link to="/register">Sign Up</Link>
                </div>
                <div class="d-flex justify-content-center">
                  {/* <a href="#">Forgot your password?</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
export default Login;
