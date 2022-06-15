import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticsLine = (props) => {
  return(
    <div>
      {props.text} {props.value}
    </div>
  )
}
const Statistics = (props) => {
  if(props.good !==0 || props.neutral !==0 || props. bad !==0){
    return(
      <table>
        <h1>statistics</h1>
        <StatisticsLine text="good" value={props.good}/>
        <StatisticsLine text="neutral" value={props.neutral}/>
        <StatisticsLine text="bad" value={props.bad}/>
        <StatisticsLine text="all" value={props.good+props.neutral+props.bad}/>
        <StatisticsLine text="average" value={(props.good-props.bad)/(props.good+props.neutral+props.bad)}/>
        <StatisticsLine text="positive" value={(props.good)/(props.good+props.neutral+props.bad)*100}/>
      </table>
    )
  }
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () =>{
    setGood(good+1)
  }
  const handleNeutral = () =>{
    setNeutral(neutral+1)
  }
  const handleBad = () =>{
    setBad(bad+1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>handleGood()} text="good"/>
      <Button handleClick={()=>handleNeutral()} text="neutral"/>
      <Button handleClick={()=>handleBad()} text="bad"/>
      <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      />
    </div>
  )
}

export default App