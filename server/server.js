const express = require("express")

const app = express()
app.use(express.json())


const port = 5000;

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.post("/signup", (req, res)=>{
  if(!req.body.firstName){
    res.send("No first name")
  }else{
    res.send("Info present")
  }
})
app.listen(port, ()=>{
  console.log(`Server is running on http://localhost:${port}`)
})