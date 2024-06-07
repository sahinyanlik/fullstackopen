import { useState } from 'react'

const Statistics = (props) => {
  

  if(props.good==0 && props.bad==0 && props.neutral ==0){
    return <div><h1>Statistics</h1>No feedback given</div>
  }

  return <div>
  <h1>Statistics</h1>
  Good {props.good} <br/>
  Neutral {props.neutral}<br/>
  Bad {props.bad}<br/>
  all {props.good+props.bad+props.neutral}<br/>
  average {((props.good*1)+(props.bad*-1))/(props.good+props.bad+props.neutral)}<br/>
  positive {(props.good)/(props.good+props.bad+props.neutral)}%<br/></div>;
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <button onClick={()=>setGood(good+1)}>good</button>
      <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=>setBad(bad+1)}>bad</button>
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
      
    </div>
  )
}

export default App