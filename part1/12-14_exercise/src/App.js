import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick,text}) => (
  <button onClick={onClick}>{text}</button>
)

const App = ({anecdotes}) => {
  const [selected,setSelected] = useState(0)
  console.log({anecdotes})
  const handleClick = () => {
    setSelected(Math.floor(Math.random()*{anecdotes}.anecdotes.length))
  }
  return (
    <div>
      <h1>{anecdotes[selected]}</h1>
      <Button onClick={handleClick} text ="next anecdote"/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes}/>,
  document.getElementById('root')
)