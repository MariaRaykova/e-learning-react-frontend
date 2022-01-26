import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import "./styles.css";
// import Courses from "./components/courses";
// import Popular from "./components/popular";
function App(props) {
  return (
    <div id="app">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
export default App;
