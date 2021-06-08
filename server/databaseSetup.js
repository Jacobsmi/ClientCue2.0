const { Sequelize } = require('sequelize');

// Creating a database object
const database = new Sequelize('sqlite:./clientcue.sqlite')

const User = require('./models/user')(database)

async function syncDB(){
    await User.sync({alter: true })
    console.log("All models were create successfully.")
}syncDB()