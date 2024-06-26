import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const updateVote = (val) => {
    const copy = { ...vote }
    copy[val] += 1 ;
    setHighest(findHighestVote(copy));
    setVote(copy)
  }

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Uint8Array(anecdotes.length))
  const [high, setHighest] = useState(0)

  const findHighestVote = (values) => {
    console.log(values);
    const highestVote = Object.keys(values).reduce((a, b) => (values[a] > values[b] ? a : b));
    console.log(highestVote)
    return highestVote;
  };

  return (
    <div>
      {anecdotes[selected]}
      <br/>
      <button onClick={()=>setSelected(getRandomInt(anecdotes.length))}>next anecdotes</button>
      has {vote[selected]}
      <button onClick={()=>updateVote(selected)}>vote</button>
      <h1>Anectodes with mosth votes </h1>
      {anecdotes[high]}
    </div>
  )
}
export default App