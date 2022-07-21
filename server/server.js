const express = require('express');
const cors = require('cors');
const app=express();

//this app.use(express.json) statement allows JSON objects with strings and arrays to be posted
app.use(express.json(), express.urlencoded({extended: true}));
app.use(cors({
    origin:'http://localhost:3000'
}));

//this will fire our mongoose.connect statement to initialize our db connection
require("./config/mongoose.config");
//this is where we will import our pet routes function from our pet.routes.js file
require('./routes/pet.routes')(app);



app.listen(8000, () => {
    console.log('Listening on port 8000')
});

//
