// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 8000
const server = app.listen(port, listening);

function listening(){
    console.log(`server running on port: ${port}`)
}

// GET route returns projectData
app.get ("/all", allData);

function allData(request, response){
    response.send(projectData);
}

//POST route adds data to ProjectData
app.post("/add", addData);

function addData(request, response) {
    
    projectData = {
        temperature: request.body.temperature,
        date: request.body.date,
        userResponse: request.body.userResponse,
    };

    response.send({
        status: 200,
        message:  "Successfully added an entry."
    });
};
    
