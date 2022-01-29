import React, { useContext } from "react";
import { CoursesContext } from "../../contexts/CoursesContext";
import CourseItem from "../CourseItem";
const ModulePopular = () => {
  const { courses } = useContext(CoursesContext);

  return (
    <section class="new_arrivals_area section-padding-80 clearfix">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-heading text-center">
              <h2>Our Most Popular Body Sculpting Courses</h2>
              <h6>
                Learn how to do these in-demand procedures with our step-by-step
                body contouring training online.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div className="grid">
              {courses.map((course) => (
                <CourseItem key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ModulePopular;
