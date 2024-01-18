import React from "react";
import CourseCard from "../Components/CourseCard";

function CategoriesContainer() {
  return (
    <div className="flex flex-col gap-2 bg-green-light p-4 text-tiny rounded-xl shadow">
      <h3 className="font-bold text-sm">Popular Categories</h3>
      <CourseCard coursename="UI/UX Designer" CourseCount="18 Course" />
      <CourseCard coursename="Marketing" CourseCount="34 Course" />
      <CourseCard coursename="Development" CourseCount="126 Course" />
      <CourseCard coursename="Business" CourseCount="213 Course" />
    </div>
  );
}

export default CategoriesContainer;
