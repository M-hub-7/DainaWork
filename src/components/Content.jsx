import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      <ul>
        {parts.map((part) => (
          <Part key={part.id} name={part.name} exercises={part.exercices} />
        ))}
      </ul>
    </div>
  );
};
export default Content;
