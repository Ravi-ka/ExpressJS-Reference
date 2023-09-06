// Writing the First express server

// Import express
const express = require('express');

// Create a server
const server = express(); 

// Handle default request
server.get('/',(req, res)=>{
    res.send('Be a Coding Ninja.');
});

// Listen on specified port
server.listen(3200,()=>{
    console.log('Port is listening on 3200')
})