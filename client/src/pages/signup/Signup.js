import './Signup.css'
import arrived from './Arrived.svg'
import { useState } from 'react'

export default function Signup() {

  const [errors, setErrors] = useState(false)

  async function signupSubmit() {
    // Dynamically track any errors found by validation in error string that will be conditionally displayed based on if any errors are found
    let errorString = '<h4>Error(s):</h4> <ul>'

    // Input validation

    const firstName = document.getElementById("SignupFirstName").value
    // validate first name
    const validFirstName = /^[a-zA-Z\-']{2,50}$/.test(firstName)
    // if invalid add to error string
    if (!validFirstName) {
      errorString += '<li>Invalid First Name</li>'
    }


    const lastName = document.getElementById("SignupLastName").value
    // validate last name
    const validLastName = /^[a-zA-Z\-']{2,50}$/.test(lastName)
    // if invalid add to error string
    if (!validLastName) {
      errorString += '<li>Invalid Last Name</li>'
    }


    const email = document.getElementById("SignupEmail").value
    // validate email
    const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    if (!validEmail) {
      errorString += '<li>Invalid Email</li>'
    }


    const password = document.getElementById("SignupPass").value
    // validate password
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password)
    if (!validPassword) {
      errorString += '<li>Invalid Password (Password must be 8 characters and have one uppercase and one number)</li>'
    }

    const passMatch = password === document.getElementById("SignupConfirm").value
    if (!passMatch) {
      errorString += '<li>Passwords do not Match</li>'
    }

    // close unordered list and add the error string generated to the div
    errorString += '</ul>'
    document.getElementById("SignupErrors").innerHTML = errorString

    // If no errors are found make the API call otherwise, display errors
    if (validFirstName && validLastName && validEmail && validPassword && passMatch) {
      setErrors(false)
      // Make an API call
      const results = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          "firstName": firstName,
          "lastName": lastName,
          "email": email,
          "password": password
        })
      })
      const resultsJSON = await results.json()
      if (resultsJSON.success === false) {
        if (resultsJSON.msg === 'email not unqiue') {
          document.getElementById('SignupErrors').innerHTML = 'Error:<li>Email already in use</li>'
          setErrors(true)
        } else if (resultsJSON.msg === 'db not properly configured') {
          document.getElementById('SignupErrors').innerHTML = 'Error:<li>Database error please see server or contact administrator</li>'
          setErrors(true)
        } else if (resultsJSON.msg === 'unhandled error inserting into db') {
          document.getElementById('SignupErrors').innerHTML = 'Error:<li>Unkown server error please see server or contanct administrator</li>'
          setErrors(true)
        }
      }
      if (resultsJSON.success === true) {
        setErrors(false)
        window.location = '/home'
      }
    } else {
      setErrors(true)
    }
  }

  return (
    <div className='Signup'>

      <div className='SignupPanel'>
        <h1>Sign Up</h1>
        <div className='SignupForm'>
          <div id='SignupErrors' style={{ 'display': `${errors ? 'block' : 'none'}` }}></div>
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