import {Link} from 'react-router-dom';

const Home =() => {
  return(
    <div className='main'>
      <div className='mainDiv'>
        <h1>Main Header</h1>
        <p>
          Paragraph text / data....
        </p>
        <hr />
        <h1>List Header</h1>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>
            <Link to='/location'>location component</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;