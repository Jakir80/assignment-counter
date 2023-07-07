
import { Link } from 'react-router-dom';
import './App.css';
const App = () => {
  return (
    <div >
      <div className='container'>
        <Link to='/login'><button className='custom-btn'>Login</button></Link>
        <Link to='/signup'> <button className='custom-btn'>Sign up</button></Link>
      </div>
      <h1 className='counter'>Counter </h1>
    </div>
  );
};

export default App;