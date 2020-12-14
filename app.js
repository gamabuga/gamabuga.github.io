//const http = require('http');
var CeiHandler = require("./modules/CeiHandler.js");
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());


//const hostname = '127.0.0.1';
//const port = 3000;

//const server = http.createServer((req, res) => {
//  res.statusCode = 200;
//  res.setHeader('Content-Type', 'text/plain');
//  res.end('Hello World');
//});

//server.listen(port, hostname, () => {
//  console.log(`Server running at http://${hostname}:${port}/`);
//});

let result = new CeiHandler("18217713707", "Ron@ldd12")
values = result.GetInfo()
console.log(values);
