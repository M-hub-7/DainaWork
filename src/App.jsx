const Hearder = (props) => {
  return (
    <>
      <h1>{props.course}</h1>;
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.part} :{props.exercises}
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
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Hearder course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      {console.log()}
      <Total a={exercises1} b={exercises2} c={exercises3} />
    </div>
  );
};
export default App;
