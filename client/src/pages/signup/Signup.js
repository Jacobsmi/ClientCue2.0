import './Signup.css'
import arrived from './Arrived.svg'

export default function Signup(){
  return(
    <div className='Signup'>
      <div className='SignupPanel'>
        Sign Up
      </div>
      <div className='ImagePanel'>
      <img src={arrived} className='SignupImage' alt='Sign Up Image' />
      </div>
    </div>
  )
}