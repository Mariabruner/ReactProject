import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './Home';
import Nasa from './Nasa';
import Location from './Location';
import WeatherData from './WeatherData';
import Ticketmaster from '../components/Ticketmaster/Ticketmaster';

const Sidebar = () => {
  return(
    <div className='sidebar'>
      <div className='sidebar-list-styling'>
        <ul className='sidebar-list list-unstyled'>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/location'>Location</Link></li>
        <li><Link to='/nasa'>Nasa</Link></li>
        <li><Link to='/weatherdata'>Weather</Link></li>
        <li><Link to='/Ticketmaster'>Ticketmaster</Link></li>
        </ul>
      </div>
      <div className='sidebar-route'>
        <Switch>
          <Route exact path='/home'><Home /></Route>
          <Route exact path='/location'><Location /></Route>
          <Route exact path='/nasa'><Nasa /></Route>
          <Route exact path='/WeatherData'><WeatherData /></Route>
          <Route exact path='/Ticketmaster'><Ticketmaster /></Route>
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;