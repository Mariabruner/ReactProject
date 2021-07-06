import React, {useState} from 'react'
import './Nasa.css'
import Location from './Location'


const GetNasaImage = () => {

    //const [weather, setWeather] = useState()
    //const [temp, setTemp] = useState()
    //const [feelsLike, setFeelsLike] = useState()    
    //use {feelsLike} in context

    let lat = 39.767
    let lon = -86.145

    const fetchResults = () => {
        let key = `&apikey=Ay4Htt1tlGNl8EwC1oMhuwabaoVUwa2z3K5pTLxo`
        let url = `https://api.nasa.gov/planetary/earth/imagery?lat=${lat}&lon=${lon}&appid=${key}`


        fetch(url)
            .then(res => res.json())
            .then( res => {
                // setWeather(res.weather[0].main)
                // console.log(res.main.temp)
                // setFeelsLike(res.main.feels_like)
            })
            .catch( error => {
                console.log(error)
            })
            
    }

    fetchResults()
    return (
        <div>
        <h1>Satellite Image for your location:</h1>
        <h1>Put image here</h1>
        </div>
    )

}

export default GetNasaImage;