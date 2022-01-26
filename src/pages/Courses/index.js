import React from "react";

import CoursesGrid from "./CoursesGrid";

const Store = () => {
  return (
    <div>
      <div className="text-center mt-5">
        <h1>All courses</h1>
        <p>View all courses</p>
      </div>
      <CoursesGrid />
    </div>
  );
};

export default Store;
