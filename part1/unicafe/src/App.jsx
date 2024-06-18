import { useState } from 'react'

const StatisticLine = (props) => {
  console.log(props);
  return <div>  {props.text} {props.value}</div>
}

const Statistics = (props) => {
  
  if(props.good==0 && props.bad==0 && props.neutral ==0){
    return <div><h1>Statistics</h1>No feedback given</div>
  }

  return(
    <div>
      <h1>Statistics</h1>
      
      <table>
        <thead>
        </thead>
        <tbody>
        <tr>
          <td>Good</td>
          <td>
          <StatisticLine text="good" value ={props.good}/>
          </td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td><StatisticLine text="neutral" value ={props.neutral} /></td>
        </tr>
        <tr>
          <td>Bad</td>
          <td><StatisticLine text="bad" value ={props.bad} /></td>
        </tr>
        <tr>
          <td>all</td>
          <td>{props.good+props.bad+props.neutral}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{((props.good*1)+(props.bad*-1))/(props.good+props.bad+props.neutral)}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{(props.good)/(props.good+props.bad+props.neutral)}%</td>
        </tr>
        </tbody>
        </table>
      </div>
  )
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