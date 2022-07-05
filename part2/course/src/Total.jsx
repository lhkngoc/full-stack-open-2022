import React from 'react'

const Total = (props) => {
  const initialValue = 0;
  const total = props.total.parts.reduce(
  (previousValue, currentValue) =>
  previousValue + currentValue.exercises,
  initialValue
);
  return (
    <div>
      <p>Number of exercises: {total}</p>
    </div>
  )
}

export default Total