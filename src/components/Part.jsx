import React from "react";

const Part = ({ exercises, name }) => {
  return (
    <p>
      {name}: {exercises}
    </p>
  );
};
export default Part;
