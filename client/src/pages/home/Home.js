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

      <div className='Body'>
        <div className='Header'>
          Make managing customer relationships easy.
        </div>
        <div className='SubHeader'>
          Start converting interactions into sales today.
        </div>
        <Link to='/signup' className='GetStartedButton'>
          Get Started
        </Link>
      </div>
    </div>
  )
}