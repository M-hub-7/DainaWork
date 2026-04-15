import React from "react";
import Course from "./components/Course";

const App = () => {
  const course = [
    {
      id: 1,
      name: "Half stack application development",
      parts: [
        {
          name: "fundamentals of react",
          exercices: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercices: 7,
          id: 2,
        },
        {
          name: "state of a component",
          exercices: 14,
          id: 3,
        },
        {
          name: "redux",
          exercices: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercices: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercices: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
