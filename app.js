const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const port = process.env.PORT || 3000;
const keys = require('./config/keys');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
//Load the auth routes
const auth = require('./routes/auth');



//Global promise
mongoose.promise = global.Promise;
//Connected the mongoDB
mongoose.connect(keys.mongoURI,{
	useMongoCilent:true,
}).then(()=>console.log('MongoDB is Connected'))
  .catch((err)=>console.log('Error: ',err));

//Load the user model
require('./models/User');

//initiate the passport
require('./config/passport')(passport);

//Inittialize the cookies
app.use(cookieParser());
app.use(session({
	secret:'secret',
	resave:false,
	saveUninitialized:false
}));

//Intialize the passport
app.use(passport.initialize(passport));
app.use(passport.session());

//Now use auth routes
app.use('/auth',auth);

app.get('/dashboard',(req,res)=>{
	res.send('dashboard');
});

app.listen(port,()=>{
	console.log(`Server start listening on ${port} port`);
});


app.get('/',(req,res)=>{
	console.log('Its cluster.Worker(1)')
	res.send('its work!');
});