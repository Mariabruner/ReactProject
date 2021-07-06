import React, { useState } from 'react'
import './WeatherData.css'



let curUnit = "imperial"

const GetWeather = () => {

    const [weather, setWeather] = useState()
    const [temp, setTemp] = useState()
    const [feelsLike, setFeelsLike] = useState()
    const [county, setCounty] = useState()

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
    

    const fetchResults = (curUnit, lat, lon) => {
        let key = `9abe7b37b3a238440fcff0377e910c06`
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${curUnit}`


        fetch(url)
            .then(res => res.json())
            .then(res => {
                setWeather(res.weather[0].main)
                setFeelsLike(res.main.feels_like)
                setTemp(res.main.temp)
                setCounty(res.name)
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
            <div className="mainDiv">
                <button onClick={getPosition}>Click for Weather Information!</button>
                <div className="dataHolder">
                <h1>Today's Weather Report for {county} County!</h1>
                <br />
                <h2>Weather Conditions for the day: {weather}</h2>
                <h2>Current Temperature: {temp} °F</h2>
                <h2>Feels Like: {feelsLike} °F</h2>
                </div>
                <button onClick={toggleUnits}>Switch to Celsius</button>
            </div>
        )
    } else if (curUnit === "metric") {
        return (
            <div className="mainDiv"> 
            <button onClick={getPosition}>Click for Weather Information!</button>
            <div className="dataHolder">
            
                <h1>Today's Weather Report for {county} County!</h1>
                
                <br />
                <h2>Weather Conditions for the day: {weather}</h2>
                <h2>Current Temperature: {temp} °C</h2>
                <h2>Feels Like: {feelsLike} °C</h2>
                </div>
                <button onClick={toggleUnits}>Switch to Farenheit</button>
            </div>
        )
    }
}

export default GetWeather