import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';


import {
  BrowserRouter as Router
} from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Home />
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
