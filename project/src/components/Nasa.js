import React, {useState} from 'react'

import {Card, CardImg} from 'reactstrap';
import './Nasa.css'



const Nasa = (props) => {
  
  const [lat, setLatitude] = useState()
  const [lon, setLongitude] = useState()
  
  const nasaKey = process.env.REACT_APP_NASA_KEY;
  let url = `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&api_key=${nasaKey}`


  function success(pos) {
    let lat = pos.coords.latitude
    let lon = pos.coords.longitude
    console.log(lat, lon)

    results(lat, lon)
  }

  function error(err) {
      console.log(err)
  }

  function getPosition() {
      navigator.geolocation.getCurrentPosition(success, error)
  }
  getPosition()


  const results = (lat, lon) => {
    setLatitude(lat)
    setLongitude(lon)
  }
  return (
    <div><h1>Satellite Image for your location:</h1>
    <Card>
      <CardImg src={url} alt="satelite image"  />
    </Card>
    </div>
  )

}

export default Nasa