
import React, { Component } from "react";
import { render } from "react-dom";


class Location extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Longitude is :", position.coords.longitude);
      const longitude = position.coords.longitude
      console.log("Latitude is :", position.coords.longitude);
      const latitude = position.coords.latitude
      return (longitude, latitude)
    });
  }

  render() {
    return (
      <div>
        <h4>Using geolocation JavaScript API in React</h4>
      </div>
    );
  }
}

render(<Location />, document.getElementById("root"));

<<<<<<< HEAD
export default Location;
=======
export default App;

>>>>>>> f3bdaa321d74ee748e4427964adf44cfe16c627a
