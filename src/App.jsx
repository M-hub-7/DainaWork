const Hearder = (props) => {
  return (
    <>
      <h1>{props.course}</h1>;
    </>
  );
};



const Content = (props) => {
  return <>{props.exercice}</>;
};
const Total = (props) => {
  return <>{props.part}</>;
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
      <p>
        <Total part={part1} /> <Content exercice={exercises1} />
      </p>
      <p>
        <Total part={part2} /> <Content exercice={exercises2} />
      </p>
      <p>
        <Total part={part3} /> <Content exercice={exercises3} />
      </p>
    </div>
  );
};
export default App;
