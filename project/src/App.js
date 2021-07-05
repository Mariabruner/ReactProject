import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

=
import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Sidebar from './components/site/Sidebar';

=======
import Location from './components/Location'
import GetWeather from './components/WeatherData'



import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import {
  BrowserRouter as Router
} from 'react-router-dom'; 


function App() {
  return (
    <div className="App">

      <Location />
<<<<<<< HEAD

 


      <Header/>
      <Router>
        <Sidebar />
      </Router>
      <Footer />

=======
      <GetWeather />
>>>>>>> maria
    </div>
  );
};

export default App;
