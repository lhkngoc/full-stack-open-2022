import React from 'react'

const Filter = (props) => {
    return(
      <div>
          filter shown with <input
          value={props.word}
          onChange={props.findWord}/>
        </div>
    )
  }

export default Filter