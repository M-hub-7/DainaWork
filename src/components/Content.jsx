import React from "react";
import Part from "./Part";
import Total from "./Total";
const Content = ({ parts }) => {
  const total = parts[0].exercices + parts[1].exercices + parts[2].exercices;
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercices} />
      ))}
      <Total exercices={total} />
    </div>
  );
};
export default Content;
