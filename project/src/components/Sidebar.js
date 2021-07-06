import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Nasa from './Nasa';
import WeatherData from './WeatherData';
import Ticketmaster from '../components/Ticketmaster/Ticketmaster';

const Sidebar = () => {
  return(
    <div className='sidebar'>
      <div className='sidebar-list-styling'>
        <ul className='sidebar-list list-unstyled'>
        <li><Link to='/nasa'>Nasa</Link></li>
        <li><Link to='/weatherdata'>Weather</Link></li>
        <li><Link to='/Ticketmaster'>Ticketmaster</Link></li>
        </ul>
      </div>
      <div className='sidebar-route'>
        <Switch>
          <Route exact path='/nasa'><Nasa /></Route>
          <Route exact path='/WeatherData'><WeatherData /></Route>
          <Route exact path='/Ticketmaster'><Ticketmaster /></Route>
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;