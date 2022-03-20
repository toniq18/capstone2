var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
// const fetch = require('node-fetch')
const cors = require('cors');
const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist')) 
app.use(express.static(__dirname + '/public'));
// import fetch from 'node-fetch';
console.log(__dirname)


const dotenv = require('dotenv');
const { request } = require('http');
const { response } = require('express');
const { text } = require('body-parser');
dotenv.config();

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})


// Setup Server
const port = 8000;
const server = app.listen(port, listening)
function listening(){
    console.log('server running');
    console.log(`server is running on local host: ${port}`)
}




//post route 
app.post('/add', addInfo);
function addInfo(request, response){
    let newInfo = {
        latitude: request.body.latitude,
        longitude: request.body.longitude,
        country: request.body.country
    }
    projectData=newInfo;
};



//get route 
app.get('/wthr', sendToEndpoint);
function sendToEndpoint (request, response){
    response.send(projectData)
}
