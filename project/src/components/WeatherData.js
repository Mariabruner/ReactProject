import React, {useState, useEffect} from 'react'


const GetWeather = () => {
    const [weather, setWeather] = useState()
    const [temp, setTemp] = useState()

    let lat = 39.767
    let lon = -86.145

    const fetchResults = () => {
        let key = `9abe7b37b3a238440fcff0377e910c06`
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`


        fetch(url)
            .then(res => res.json())
            .then( res => {
                console.log(res)
                console.log(res.weather[0].main)
                setWeather(res.weather[0].main)
                console.log(res.main.temp)
                setTemp(res.main.temp)
            })
            .catch( error => {
                console.log(error)
            })
            
    }

    fetchResults()
    return (
        <div>
        <h1>{weather}</h1>
        <h1>Current Temperature: {temp} °C</h1>
        </div>
    )
}

export default GetWeather