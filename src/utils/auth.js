import { useEffect } from "react";
import Cookie from "js-cookie";
import { API_URL } from "../utils";
import { useNavigate, useParams } from "react-router-dom";

export const getToken = () => {
  if (window && window.localStorage) {
    return window.localStorage.getItem("token");
  }
};

export const isAuthenticated = () => {
  const token = getToken();
  if (token) {
    return token;
  } else {
    return false;
  }
};

// export const getVerifiedUser = () => {
//   const token = isAuthenticated();
//   return fetch(`${API_URL}/api/user/verify`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token
//     }
//   }).then((promise) => {
//     return promise.json();
//   });
// };

//register a new user
// export const registerUser = async (data) => {
//   if (typeof window === "undefined") {
//     return;
//   }
//   const res = await fetch(`${API_URL}/api/auth/local/register}`, {
//     method: "POST",
//     body: JSON.stringify(data)
//   });
//   res
//     .json()
//     .then((res) => {
//       Cookie.set("token", res.data.jwt);
//       // history("/");
//       // console.log(
//       //   JSON.stringify(
//       //     res.data.attributes.test.data.attributes?.questions?.data
//       //   )
//       // );
//       // setQuestions(res.data.attributes.test.data.attributes?.questions?.data);
//     })
//     .catch((err) => console.log("error :", err));
// };

// export const loginUser = async (identifier, password) => {
//   //prevent function from being ran on the server
//   if (typeof window === "undefined") {
//     return;
//   }

//   const res = await fetch(`${API_URL}/api/auth/local/`, {
//     method: "POST",
//     body: JSON.stringify(data)
//   });
//   res
//     .json()
//     .then((res) => {
//       //set token response from Strapi for server validation
//       Cookie.set("token", res.data.jwt);
//       // history("/");
//       //resolve the promise to set loading to false in SignUp form

//       //redirect back to home page for restaurance selection
//     })
//     .catch((err) => console.log("error :", err));
// };

// export const logout = () => {
//   //remove token and user cookie
//   Cookie.remove("token");
//   delete window.__user;
//   // sync logout between multiple windows
//   window.localStorage.setItem("logout", Date.now());
//   //redirect to the home page
//   // Router.push("/");
// };

//Higher Order Component to wrap our pages and logout simultaneously logged in tabs
// THIS IS NOT USED in the tutorial, only provided if you wanted to implement
// export const withAuthSync = (Component) => {
//   const history = useNavigate()
//   const Wrapper = (props) => {
//     const syncLogout = (event) => {
//       if (event.key === "logout") {
//         history("/login");
//       }
//     };

//     useEffect(() => {
//       window.addEventListener("storage", syncLogout);

//       return () => {
//         window.removeEventListener("storage", syncLogout);
//         window.localStorage.removeItem("logout");
//       };
//     }, []);

//     return <Component {...props} />;
//   };

//   if (Component.getInitialProps) {
//     Wrapper.getInitialProps = Component.getInitialProps;
//   }

//   return Wrapper;
// };
