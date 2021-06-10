const express = require("express")
const cors = require('cors')
const { Sequelize } = require('sequelize');
var jwt = require('jsonwebtoken');


// Set a secret for creating JWT's
let accessTokenSecret = 'AccessTokenSecret'

// Setup the database connection
const database = new Sequelize('sqlite:./clientcue.sqlite')
const User = require('./models/user')(database)

// Create the express app
const app = express()

// Setup Cors Options
const corsOptions ={
  origin: ['http://localhost:3000'],
  credentials: true
}

// Setup middleware
app.use(express.json())
app.use(cors(corsOptions))

const port = 5000;

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.post("/signup", async (req, res)=>{
  //Create a holde for newUser
  let newUser = null

  // Check to see if all information is present in the body of the POST request
  if(!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password){
    // If info is missing send a 400 error
    return res.status(400).send(JSON.stringify({success: false, msg: "missing info"}))
  }
  // If all information is present attempt to insert into the database
  else{
    try{
      // Create a new entry in the database
      newUser = await User.create({
        firstName: req.body.firstName, 
        lastName: req.body.lastName, 
        email: req.body.email, 
        password: req.body.password
      })
    }
    // Catch and report any errors
    catch(err){
      // Get the error as a string for parsing
      const errString = err.toString()

      // Check if the error is a table not exist error in which case the DB probably hasn't been set up/configuration failed
      if (errString.includes("no such table")){
        return res.status(200).send(JSON.stringify({success: false, msg: "db not properly configured"}))
      }
      // Catch non-unique email
      else if(errString.includes("SequelizeUniqueConstraintError")){
        return res.status(200).send(JSON.stringify({success: false, msg: "email not unqiue"}))
      }
      // Handle all other errors
      else{
        console.log(`Error Message: ${err.toString()}`)
        console.log(err)
        return res.status(500).send(JSON.stringify({success: false, msg: "unhandled error inserting into db"})).set()
      }
    }
    // Create an access token that corresponds to the new user's ID
    let token = jwt.sign({ id: newUser.id }, accessTokenSecret);
    res.set("Set-Cookie", `accessToken=${token}; httpOnly; Secure;`)
    // If everything goes well send response
    return res.status(200).send(JSON.stringify({success: true}))
  }
})
app.listen(port, ()=>{
  console.log(`Server is running on http://localhost:${port}`)
})