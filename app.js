const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const port = process.env.PORT || 3000;

const app = express();
//Load the auth routes
const auth = require('./routes/auth');

//initiate the passport
require('./config/passport')(passport);


//Now use auth routes
app.use('/auth',auth);












app.listen(port,()=>{
	console.log(`Server start listening on ${port} port`);
});


app.get('/',(req,res)=>{
	console.log('Its cluster.Worker(1)')
	res.send('its work!');
});