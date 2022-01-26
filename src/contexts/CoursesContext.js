import React, { createContext, useState, useEffect } from "react";
import { API_URL } from "../utils";
import { queryCourse } from "../utils/query";

export const CoursesContext = createContext();

const CoursesContextProvider = ({ children }) => {
  const [hasError, setErrors] = useState(false);

  const [courses, setCourses] = useState(null);
  const [tests, setTests] = useState(null);
  const [questions, setQuestions] = useState(null);
  const fetchData = async () => {
    //const res = await fetch(`${process.env.REACT_APP_HOST}/products`);
    //const res = await fetch(`${API_URL}/api/products`);
    //const res = await fetch(`${API_URL}/api/products?pagination[limit]=3&pagination[withCount]=true&populate=image`);

    const res = await fetch(`${API_URL}/api/courses?${queryCourse}`);
    res
      .json()
      .then((res) => {
        setCourses(res.data);
        console.log("success", res);
      })
      .catch((err) => setErrors("error :", err));
  };
  // const fetchTest = async () => {
  //   const res = await fetch(`${API_URL}/api/tests`);
  //   res
  //     .json()
  //     .then((res) => {
  //       setTests(res.data);
  //     })
  //     .catch((err) => setErrors("error :", err));
  // };
  // const fetchQuestions = async () => {
  //   const res = await fetch(`${API_URL}/api/questions`);
  //   res
  //     .json()
  //     .then((res) => {
  //       setTests(res.questions);
  //     })
  //     .catch((err) => setErrors("error :", err));
  // };
  useEffect(() => {
    fetchData();
    // fetchTest();
    // fetchQuestions();
  }, []);

  return (
    <>
      {courses && (
        <CoursesContext.Provider value={{ courses }}>
          {children}
        </CoursesContext.Provider>
      )}
    </>
  );
};

export default CoursesContextProvider;
