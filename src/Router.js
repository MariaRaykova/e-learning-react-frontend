import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Store from "../pages/store";
import About from "./pages/About";
import Home from "./pages/Home";
import Test from "./components/test";
import NotFound from "./pages/NotFound";
import Quiz from "./pages/Quiz";
import Cart from "./pages/Cart";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Cart from "../pages/cart";

const Router = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/test" element={<Test />} />
      <Route exact path="/" element={<Home />} />
      <Route path="/course/test/:id" element={<Quiz />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route exact path="/course/:id" element={<Course />} />
      <Route exact path="/courses" element={<Courses />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
