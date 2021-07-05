import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './Home';
import Ticketmaster from '../components/Ticketmaster/Ticketmaster';

const Sidebar = () => {
  return(
    <div className='sidebar'>
      <div className='sidebar-list-styling'>
        <ul className='sidebar-list list-unstyled'>
          <li><Link to='/functionalcomponent'>Functional Component</Link></li>
          <li><Link to='/Ticketmaster'>Ticketmaster</Link></li>
        </ul>
      </div>
      <div className='sidebar-route'>
        <Switch>
        <Route exact path='/home'><Home/></Route>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/Ticketmaster'><Ticketmaster/></Route>
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;