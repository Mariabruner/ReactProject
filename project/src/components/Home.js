import {Link} from 'react-router-dom';

const Home =() => {
  return(
    <div className='main'>
      <div className='mainDiv'>
        <h1>Welcome to our Apptastic App</h1>
        <p>
          Find out what is happening up in the sky with the Nasa finder. Or, get the latest weather with the Weather finder. Or, catch a nearby event by searching in the Event finder. You don't even have to do any legwork. The finders will take your current location and find all the details for you. **maybe we will upgrade and let you choose other locations in the future!**
        </p>
        <hr />
        <h1>Your Choices - click a link below!</h1>
        <ul>
          <li>
            <Link to='/location'>location component</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;