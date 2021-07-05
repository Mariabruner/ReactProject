import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './Home';
import Location from './Location';

const Sidebar = () => {
  return(
    <div className='sidebar'>
      <div className='sidebar-list-styling'>
        <ul className='sidebar-list list-unstyled'>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/location'>Location</Link></li>
        <li><Link to='/nasa'>Nasa</Link></li>
        <li><Link to='/openweather'>Weather</Link></li>
        <li><Link to='/ticketmaster'>Events</Link></li>
        </ul>
      </div>
      <div className='sidebar-route'>
        <Switch>
        <Route exact path='/home'><Home /></Route>
        <Route exact path='/location'><Location /></Route>
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;