import React, { useState } from 'react';
import {Button} from 'reactstrap'

  const Location = () => {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      
    })

}

  return (
    <div className="App">
      <Button className="location" color="success" onClick={getLocation}>Get Your Current Location!</Button>
      {lat && <p>Latitude: {lat}</p>}
      {lon && <p>Longitude: {lon}</p>}
    </div>
  );
}

export default Location

