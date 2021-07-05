import React, {useState} from 'react'
import './WeatherData.css'
import Location from './Location'

let curUnit = "imperial"

const GetWeather = () => {
    const [weather, setWeather] = useState()
    const [temp, setTemp] = useState()
    const [feelsLike, setFeelsLike] = useState()

   

    let lat = 39.767
    let lon = -86.145

    const fetchResults = (curUnit) => {
        let key = `9abe7b37b3a238440fcff0377e910c06`
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${curUnit}`


        fetch(url)
            .then(res => res.json())
            .then( res => {
                setWeather(res.weather[0].main)
                console.log(res.main.temp)
                setFeelsLike(res.main.feels_like)
            })
            .catch( error => {
                console.log(error)
            })
            
    }

    fetchResults(curUnit)

    const toggleUnits = () => {

       if (curUnit === "metric"){
        curUnit = "imperial"
       } else if (curUnit === "imperial"){
           curUnit = "metric"
       }
       fetchResults(curUnit)
    }

    if (curUnit === "imperial"){
    return (
        <div>
        <h1>Weather Conditions for the day: {weather}</h1>
        <h1>Current Temperature: {temp} °F</h1>
        <h1>Feels Like: {feelsLike} °F</h1>
        <button onClick={toggleUnits}>Switch to Celsius</button> 
        </div>
    )
    } else if (curUnit === "metric"){
        return(
        <div>
        <h1>Weather Conditions for the day: {weather}</h1>
        <h1>Current Temperature: {temp} °C</h1>
        <h1>Feels Like: {feelsLike} °C</h1>
        <button onClick={toggleUnits}>Switch to Farenheit</button> 
        </div>
        )
    }
}

export default GetWeather