import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className='Home'>

      <header>

        <div className='Logo'>
          ClientCue
        </div>
        <nav>
          <Link to='/'>
            Link
          </Link>
          <Link to='/'>
            Link
          </Link>
          <Link to='/'>
            Link
          </Link>
        </nav>
        <div className='AccountLinks'>
          <Link to='/login'>
            Login
          </Link>
          <Link to='/signup' className='SignupLink'>
            Sign Up
          </Link>
        </div>
      </header>

      
    </div>
  )
}