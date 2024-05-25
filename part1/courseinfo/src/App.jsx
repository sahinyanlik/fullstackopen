const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
      <div>
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
      </div>
  );
};

const Part = (props) => {
  console.log(props)
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Total = (props) => {

  const calculateTotal = (parts) =>{
    return  parts[0].exercises + parts[1].exercises + parts[2].exercises
  }

  return (
    <p>
      <p>Number of exercises {calculateTotal(props.parts)}</p>
    </p>
  );
};

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total
       parts={parts}
      />
    </div>
  );
};

export default App;
