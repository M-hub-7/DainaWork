import React from "react";

const Part = ({ exercises, name }) => {
  return (
    <li>
      {name}: {exercises}
    </li>
  );
};
export default Part;
