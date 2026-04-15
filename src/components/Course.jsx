import React from "react";

import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
const Course = ({ course }) => {
  return (
    <>
      {course.map((cour) => (
        <div key={cour.id}>
          <Header course={cour} />
          <Content parts={cour.parts} />
          <Total parts={cour.parts} />
        </div>
      ))}
    </>
  );
};
export default Course;
