import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ShowCountry from './components/ShowCountry'

const App = () => {
  const [countries, setCountries] = useState([])
  const [word, setWord] = useState('')
  const [countryChosen, setCountryChosen] = useState([])
  const [show, setShow] = useState(false)
  const [choose, setChoose] = useState(0)

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    setCountryChosen(filter)
  }, [word])

  const handleWordChange = (event) => {
    setWord(event.target.value)
  }

  const filter = countries.filter(country=> country.name.common.toLowerCase().includes(word.toString().toLowerCase()))

  const handleClick = (c) => {
    setShow(!show)
    setChoose(c)
  }

  return (
    <div>
       {choose !== 0 ? <ShowCountry countryChosen={choose}/>
       :<div>
        Find countries <input value={word} onChange={handleWordChange}/>
        {countryChosen.length > 10
        ? (<div>Too many matches, specify another filter</div>)
        : countryChosen.length === 1
        ? <ShowCountry countryChosen={countryChosen[0]}/>
        :<div>
          {countryChosen.map(c =>
          <p>{c.name.common} <button onClick={()=>handleClick(c)}>show</button></p>)}
        </div>
        }
      </div>
}
    </div>
  )
}
export default App