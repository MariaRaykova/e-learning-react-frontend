import React, { createContext, useState, useEffect } from "react";
import { API_URL } from "../utils";
import { queryCourse } from "../utils/query";
import axios from "axios";
const secret =
  "ST_NDI2Nzg5NGItMjkyOS00MGE2LWE0ZjgtNzExYjY2ODg1Njk2NjM3Nzk2NjUxNDk5MTcwNzky";

export const CoursesContext = createContext();

const CoursesContextProvider = ({ children }) => {
  const [hasError, setErrors] = useState(false);
  const [courses, setCourses] = useState(null);
  const [course, setCourse] = useState();
  const [questions, setQuestions] = useState(null);
  const list = [];
  const fetchData = async () => {
    if (!courses) {
      const res = await fetch(`${API_URL}/api/courses?${queryCourse}`);
      res
        .json()
        .then((res) => {
          // Object.entries(res.data).map((item) => {
          //   list.push({
          //     id: item[0],
          //     name: item[1].attributes?.course_name,
          //     price: item[1].attributes?.course_price
          //   });
          // });
          setCourses(res.data);
          console.log("success", res);
        })
        .catch((err) => setErrors("error :", err));
    }
  };

  const updateList = (data) => {
    console.log(JSON.stringify(data));
    return new Promise((resolve, reject) => {
      fetch("https://app.snipcart.com/api/products", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Basic ${Buffer.from(secret + ':').toString('base64')}`,
        },
        body: JSON.stringify(data)
        
      })
        .then((res) => {
          console.log("res" + JSON.stringify(res));
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

  // const result = await request.json()
  // axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  // axios
  //   .post("https://app.snipcart.com/api/products", data, {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Content-Type": "application/json"
  //     },
  //     withCredentials: true
  //   })
  //     fetch("https://app.snipcart.com/api/products", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         "Access-Control-Allow-Origin": "*"
  //       },
  //       body: { data }
  //     })
  //       .then((res) => {
  //         console.log("res" + JSON.stringify(res));
  //         //resolve the promise to set loading to false in SignUp form
  //         resolve(res);
  //         //redirect back to home page for restaurance selection
  //       })
  //       .catch((error) => {
  //         //reject the promise and pass the error object back to the form
  //         reject(error);
  //       });
  //   });
  // };
  const update = () => {
    var list = [];
    Object.entries(courses).map((item) => {
      list.push({ 
        id: item[0], 
        name: item[1].attributes?.course_name, 
        price: item[1].attributes?.course_price 
      })
      // list = { ...list, obj}
      // console.log("list" + list)
      //  console.log("obj" + obj)
    });
    
    updateList(list);
    // setCourse(list);
  };
  //console.log("list " + JSON.stringify(course));
  useEffect(() => {
    fetchData();
    if (courses) {
      update();
    }
  }, [courses]);

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
