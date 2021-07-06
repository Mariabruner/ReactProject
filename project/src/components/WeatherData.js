import React, { useState } from 'react'
import './WeatherData.css'



let curUnit = "imperial"

const GetWeather = () => {

    const [weather, setWeather] = useState()
    const [temp, setTemp] = useState()
    const [feelsLike, setFeelsLike] = useState()

    function success(pos) {
        let lat = pos.coords.latitude
        let lon = pos.coords.longitude
        console.log(lat, lon)

        fetchResults(curUnit, lat, lon)
    }

    function error(err) {
        console.log(err)
    }

    function getPosition() {
        navigator.geolocation.getCurrentPosition(success, error)
    }
    getPosition()

    const fetchResults = (curUnit, lat, lon) => {
        let key = `9abe7b37b3a238440fcff0377e910c06`
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${curUnit}`


        fetch(url)
            .then(res => res.json())
            .then(res => {
                setWeather(res.weather[0].main)
                console.log(res.main)
                setFeelsLike(res.main.feels_like)
                setTemp(res.main.temp)
            })
            .catch(error => {
                console.log(error)
            })

    }

    const toggleUnits = () => {

        if (curUnit === "metric") {
            curUnit = "imperial"
        } else if (curUnit === "imperial") {
            curUnit = "metric"
        }
        getPosition()
    }

    if (curUnit === "imperial") {
        return (
            <div>
                <h1>Weather Conditions for the day: {weather}</h1>
                <h1>Current Temperature: {temp} °F</h1>
                <h1>Feels Like: {feelsLike} °F</h1>
                <button onClick={toggleUnits}>Switch to Celsius</button>
            </div>
        )
    } else if (curUnit === "metric") {
        return (
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