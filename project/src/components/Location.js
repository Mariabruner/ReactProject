
import React, { Component } from "react";
import { render } from "react-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {

      console.log("Latitude is :", position.coords.latitude);
      const latitude = position.coords.latitude
      console.log("Longitude is :", position.coords.longitude);
      const longitude = position.coords.longitude
      return (latitude, longitude)
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

render(<App />, document.getElementById("root"));

export default App;

