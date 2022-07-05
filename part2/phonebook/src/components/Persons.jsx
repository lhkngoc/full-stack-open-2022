import React from 'react'

const Persons = ({persons,word}) => {
    return(
      <div>
          {persons.map(person=>
          person.name.toLowerCase().includes(word.toString().toLowerCase())
          ? (<div> {person.name} {person.number}</div>)
          :(""))
          }
        </div>
    )
  }

export default Persons