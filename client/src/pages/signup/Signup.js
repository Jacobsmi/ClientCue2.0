import './Signup.css'
import arrived from './Arrived.svg'

export default function Signup() {

  function signupSubmit(){
    console.log("Sign Up submitted")
  }

  return (
    <div className='Signup'>

      <div className='SignupPanel'>
        <h1>Sign Up</h1>
        <div className='SignupForm'>
          <span>
            <label htmlFor='SignupFirstName' className='SignupDoubleInputLabel'>First Name</label>
            <label htmlFor='SignupLastName' className='SignupDoubleInputLabel'>Last Name</label>
            <br />
            <input className='SignupDoubleInput' id='SignupFirstName'></input>
            <input className='SignupDoubleInput' id='SignupLastName'></input>
            <br />
          </span>
          <label htmlFor='SignupEmail' className='SignupInputLabel'>E-Mail</label>
          <input className='SignupInput' id='SignupEmail'></input>
          <br />
          <label htmlFor='SignupPass' className='SignupInputLabel'>Password</label>
          <input className='SignupInput' id='SignupPass' type='password'></input>
          <br />
          <label htmlFor='SignupConfirm' className='SignupInputLabel'>Confirm Password</label>
          <input className='SignupInput' id='SignupConfirm' type='password'></input>
          <br />
          
          <button className='SignupButton' onClick={signupSubmit}>
            Sign Up
          </button>
        </div>
      </div>

      <div className='ImagePanel'>
        <img src={arrived} className='SignupImage' alt='Sign Up' />
      </div>

    </div>
  )
}