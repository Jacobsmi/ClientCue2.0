const express = require("express")

const { Sequelize } = require('sequelize');

const database = new Sequelize('sqlite:./clientcue.sqlite')
const User = require('./models/user')(database)

const app = express()
app.use(express.json())


const port = 5000;

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.post("/signup", async (req, res)=>{
  // Check to see if all information is present in the body of the POST request
  if(!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password){
    // If info is missing send a 400 error
    res.status(400).send(JSON.stringify({success: false, msg: "missing info"}))
  }
  // If all information is present attempt to insert into the database
  else{
    try{
      // Create a new entry in the database
      await User.create({
        firstName: req.body.firstName, 
        lastName: req.body.lastName, 
        email: req.body.email, 
        password: req.body.password
      })
    }
    // Catch and report any errors
    catch(err){
      console.log(err)
      res.status(500).send(JSON.stringify({success: false, msg: "error inserting into db"}))
    }
    // If everything goes well send response
    res.status(200).send(JSON.stringify({success: true}))
  }
})
app.listen(port, ()=>{
  console.log(`Server is running on http://localhost:${port}`)
})