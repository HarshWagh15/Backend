const express = require('express');
const app = express();
const path = require('path');

// step 1 : Setting up the Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//


// app.use(express.static(path.join(iski jagah poorah path dalna hai jahan se css/javascript/images file uthani hai her request ke liye.)))
app.use(express.static(path.join(__dirname,'public')))


// Step 2: Setting up the EJS
// Set up the EJS as view engine
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});


app.get('/about/:username', function(req, res) {
    res.send(`Welcome, ${req.params.username}`);   // This will send the username in the URL
});

app.listen(3000 , function() {
    console.log('Server is running on port 3000'); });