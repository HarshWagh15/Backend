const fs = require('fs');
const http = require('http');

// fs.writeFile("hey.txt","how are you",function(err){
//     if(err){
//         console.error(err);
//     }else console.log("Done");
// })


// adding text in file.
// fs.appendFile("hey.txt"," I am Fine.",function(err){
//     if(err){
//         console.error(err);
//     }else console.log("Done");
// })



// fs.rename("hey.txt","hello.txt",function(err){
//     if(err){
//         console.error(err);
//     }else console.log("Done");
// })


// fs.copyFile("hello.txt","./Copy/copy.txt",function(err){
//     if(err){
//         console.error(err);
//     }else console.log("Done");
// })



//Delete file
// fs.unlink("hello.txt",function(err){
//     if(err){
//         console.error(err);
//     }else console.log("Done");
// })

//rmdir removes folder
// fs.rmdir("./Copy",{recursive: true}, function(err) {
//      if(err){
//          console.error(err);
//      }else console.log("Done");
//  })



// fs.readFile("hey.txt",function(err){
//     if(err){
//         console.error(err);
//     }else console.log("Done");
// })



// const Server = http.createServer(function(req,res){
//     res.end("Hi, Harsh");
// })

// Server.listen(3000);




//Express sample code

const express = require('express')
const app = express()

//Middleware 
app.use(function(req,res,next){
    console.log("Middleware");
    next();
})

//Middleware

app.get('/' , function (req, res) {         // '/' is the route path , function is a request handler which is an function.
  res.send('Hello Harsh')
})

app.get('/about',function(req,res){
    res.send("About Page");
})



//Error Handlers

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send("Something broke !");
})
app.listen(3000)


// Nodemon usefull for auto restart server when code changes.


