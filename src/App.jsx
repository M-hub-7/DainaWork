const Hearder = (props) => {
  return (
    <>
      <h1>{props.course}</h1>;
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </>
  );
};

const Part = ({ part, exercises }) => {
  return (
    <>
      <p>
        {part} {exercises}
      </p>
    </>
  );
};
const Total = ({ a, b, c }) => {
  const total = a + b + c;
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
};

const App = () => {
  const course = "half stack applcation development";
  const parts = [
    { name: "fundamentals of react", exercises: 10 },
    { name: "using props to pass data", exercises: 7 },
    { name: "state of a component", exercises: 14 },
  ];

  return (
    <div>
      <Hearder course={course} />
      <Content parts={parts} />
      <Total
        a={parts[0].exercises}
        b={parts[1].exercises}
        c={parts[2].exercises}
      />
    </div>
  );
};
export default App;
