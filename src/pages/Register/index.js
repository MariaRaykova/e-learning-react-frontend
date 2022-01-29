import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Cookies from "js-cookie";
import { useState, useContext } from "react";
import { API_URL } from "../../utils";
import { useNavigate, useParams } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";

const RegisterPage = () => {
  const { setUser } = useContext(AuthContext);
  const history = useNavigate();
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
    showPassword: false
  });
  const registerUser = (username, email, password) => {
    //prevent function from being ran on the server
    if (typeof window === "undefined") {
      return;
    }
    return new Promise((resolve, reject) => {
      axios
        .post(`${API_URL}/api/auth/local/register`, { username, email, password })
        .then((res) => {
          //set token response from Strapi for server validation
          Cookies.set("token", res.data.jwt);
          console.log(Cookies.get())
          //resolve the promise to set loading to false in SignUp form
          resolve(res);
          //redirect back to home page for restaurance selection
        })
        .catch((error) => {
          //reject the promise and pass the error object back to the form
          reject(error);
        });
    });
  };
  // const registerUser = async (username, email, password) => {
  //   // console.log("data send " + JSON.stringify(data));
  //   if (typeof window === "undefined") {
  //     return;
  //   }
  //   const res = await fetch(`${API_URL}/api/auth/local/register}`, {
  //     method: "POST",
  //     headers: {
  //       Accept: "*/*",
  //       // "Content-Type": "application/json"
  //     },
  //     body: {username, email, password}
  //   });
  //   res
  //     .json()
  //     .then((res) => {
  //       console.log("da vidq response-a " + res);
  //       Cookie.set("token", res.data.jwt);
  //       AuthContext.setUser(res.data.user);
  //       setLoading(false);
  //       // history("/");
  //       // console.log(
  //       //   JSON.stringify(
  //       //     res.data.attributes.test.data.attributes?.questions?.data
  //       //   )
  //       // );
  //       // setQuestions(res.data.attributes.test.data.attributes?.questions?.data);
  //     })
  //     .catch((err) => setError("error :", err));
  // };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const showError = () => {
    if (error) {
      return <div className="error">*{error}</div>;
    }
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onRegisterSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const username = values.username;
    const email = values.email;
    const password = values.password;
    const rePassword = values.rePassword;
    // const showErrorMessage=()=>{
    if (username.length < 3) {
      setError("Your name should be at least 3 characters");
    } else if (!email.match(mailFormat)) {
      setError("You have entered an invalid email address!");
    } else if (password !== rePassword) {
      setError("The password and confirmation password do not match");
    } else {
      registerUser(username, email, password ).then((res) => {
        // set authed user in global context object
     
      
        AuthContext.setUser(res.data.user);
        setLoading(false);
        history("/")
      })
      .catch((error) => {
        // setError(error.response.data);
        setLoading(false);
      });
    }
  };

  return (
    <PageWrapper>
      <section className="register">
        <form onSubmit={onRegisterSubmitHandler}>
          <fieldset className="form">
            <legend>Register</legend>
            <p className="form_instructions">
              Please enter your name, e-mail and password:
            </p>

            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Name
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={"text"}
                value={values.username}
                onChange={handleChange("username")}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Email
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={"text"}
                value={values.email}
                onChange={handleChange("email")}
                required
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Repeat Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "rePassword"}
                value={values.rePassword}
                onChange={handleChange("rePassword")}
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {showError()}
            <input
              className="btn btn-pink"
              type="submit"
              className="submit"
              value="Register"
            />
              {/* <Button
                      style={{ float: "right", width: 120 }}
                      color="primary"
                      disabled={loading}
                      onClick={() => {
                        setLoading(true);
                        registerUser(data.username, data.email, data.password)
                          .then((res) => {
                            // set authed user in global context object
                            appContext.setUser(res.data.user);
                            setLoading(false);
                          })
                          .catch((error) => {
                            setError(error.response.data);
                            setLoading(false);
                          });
                      }}
                    >
                      {loading ? "Loading.." : "Submit"}
                    </Button> */}
          </fieldset>
        </form>
      </section>
    </PageWrapper>
  );
};

export default RegisterPage;
