import './Signup.css'
import arrived from './Arrived.svg'
import { useState } from 'react'

export default function Signup() {

  const [errors, setErrors] = useState(false)

  function signupSubmit(){
    // Dynamically track any errors found by validation in error string that will be conditionally displayed based on if any errors are found
    let errorString = 'Error(s): <ul>'

    // Input validation

    // validate first name
    const validFirstName = /^[a-zA-Z\-']{2,50}$/.test(document.getElementById("SignupFirstName").value)
    // if invalid add to error string
    if(!validFirstName){
      errorString += '<li>Invalid First Name</li>'
    }

    // validate last name
    const validLastName = /^[a-zA-Z\-']{2,50}$/.test(document.getElementById("SignupLastName").value)
    // if invalid add to error string
    if(!validLastName){
      errorString += '<li>Invalid Last Name</li>'
    }


    // close unordered list and add the error string generated to the div
    errorString += '</ul>'
    document.getElementById("SignupErrors").innerHTML = errorString

    if(validFirstName && validLastName){
      console.log("All fields valid")
      setErrors(false)
    }else{
      setErrors(true)
    }
    console.log(validFirstName)
  }

  return (
    <div className='Signup'>

      <div className='SignupPanel'>
        <h1>Sign Up</h1>
        <div className='SignupForm'>
          <div id='SignupErrors' style={{'display': `${errors ? 'block': 'none'}`}}></div>
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