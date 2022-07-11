/*1. Write a node.js program for making external http calls.*/
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// async function res(){
//     const response = await fetch('https://github.com/');
//     const body = await response.text();
//     console.log(body);
// }
// res()

var http = require('http');
http.request({
    host: 'www.google.com',
    method: 'GET',
    path: "/"
    },
    function(response) {
        response.setEncoding("utf8");
        response.on("readable", function() {
        console.log(response.read())
        });
    }).end();