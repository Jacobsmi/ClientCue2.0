# ClientCue 

- ClientCue is a Customer Relation Management tool I built as a project to help develop and hone my skills with Javascript specifically React and Express

## Running ClientCue

### Setting Up the Database

- Prerequisites
  - Node.JS and npm (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  - SQLite3 (https://www.sqlitetutorial.net/download-install-sqlite/)

- Installing Dependencies
  - After cloning the repo navigate to the folder in your terminal and `cd server` so that you are in the server directory of the project
  - `npm i` to install the dependencies for the project

- Creating the Database
  - `node databaseSetup.js` to run the database creation and setup scripts
  - You should get the message "All models were synchronized successfully" and a file called "clientcue.sqlite" should be created

- Running the Server
  - Ensure that nothing is running on port 5000 and your terminal is in the server directory
  - `npm run prod` which runs the server (It can also be run with `npm run dev` but that runs with nodemon and requires it to be installed)
