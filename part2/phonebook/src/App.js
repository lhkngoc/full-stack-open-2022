import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [word, setWord] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')


  const addName = (event,newName) => {
    event.preventDefault()

    const found=persons.find(element => element.name === newName)
    console.log(found)

    if(found){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewPhone('')
    }
    else{
      const nameObject = {
        name: newName,
        number: newPhone,
        id: persons.length + 1,
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewPhone('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const findWord = (event) => {
    setWord(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
      word={word}
      findWord={findWord}/>

      <h2>add a new</h2>
      <PersonForm
      addName={addName}
      newName={newName}
      newPhone={newPhone}
      handleNameChange={handleNameChange}
      handlePhoneChange={handlePhoneChange}/>

      <h2>Numbers</h2>
      <Persons
      persons={persons}
      word={word}/>
    </div>
  )
}

export default App
