import React, { useContext } from "react";
import CourseItem from "../../components/CourseItem";
import { CoursesContext } from "../../contexts/CoursesContext";

const CoursesGrid = () => {
  const { courses } = useContext(CoursesContext);

  return (
    <div className="p__container">
      <div className="row">
        <div className="col-sm-4">
          <div className="form-group">
            <input
              type="text"
              name=""
              placeholder="Search product"
              className="form-control"
              id=""
            />
          </div>
        </div>
      </div>
      <div className="grid">
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
      <div className="p__footer"></div>
    </div>
  );
};

export default CoursesGrid;
