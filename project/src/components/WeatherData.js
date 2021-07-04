import React from 'react'


const GetWeather = () => {

    let lat = 39.767
    let lon = -86.145

    const fetchResults = () => {
        let key = `9abe7b37b3a238440fcff0377e910c06`
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`


        fetch(url)
            .then(res => res.json())
            .then( res => {
                console.log(res)
            })
            
    }


    fetchResults()
    return (
        <h1>Hello</h1>
    )
}

export default GetWeather