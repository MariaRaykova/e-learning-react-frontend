import React from "react";

import CoursesGrid from "./CoursesGrid";
import PageWrapper from "../../components/PageWrapper";
const Store = () => {
  return (
    <PageWrapper>
      <div>
        <div className="text-center mt-5">
          <h1>All courses</h1>
          <p>View all courses</p>
        </div>
        <CoursesGrid />
      </div>
    </PageWrapper>
  );
};

export default Store;
