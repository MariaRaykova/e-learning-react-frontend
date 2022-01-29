import React from "react";
const AuthContext = React.createContext({
  // user: null,
  isAuthenticated: false
  // logIn: () => {},
  // logOut: () => {}
});

export default AuthContext;
