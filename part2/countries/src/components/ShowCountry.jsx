import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const ShowCountry = ({countryChosen}) => {
    const [weather, setWeather] = useState([])

    // const getWeather = () => {
    //     axios
    //     .get(`api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f7098918f50b453c54a7fb8910b02425`)
    //     .then(response => {
    //       setWeather(response.data)
    //     })
    //   }

    useEffect(()=>{
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${countryChosen.name.common}&APPID=f7098918f50b453c54a7fb8910b02425&units=metric`)
        .then(response => {
          setWeather(response.data)
        })
    },[])
    console.log(weather)
  return (
    <div>
        <h1>{countryChosen.name.common}</h1>
        <p>capital {countryChosen.capital}</p>
        <p>area {countryChosen.area}</p>
        <h3>languages</h3>
        <p>{Object.values(countryChosen.languages).join("\n")}</p>
        <img src={countryChosen.flags.png} alt=''></img>
        <h3>Weather in {countryChosen.capital}</h3>
        <div>
            {weather.length !== 0
                ? (<div>
                    <p>temperature {weather.main.temp} Celcius</p>
                    <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt=''></img>
                    <p>wind {weather.wind.speed} m/s</p>
                    </div>)
                : (<div>undefined</div>)
            }
        </div>
  </div>
  )
}

export default ShowCountry