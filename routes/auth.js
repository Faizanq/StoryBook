const express = require('express');
const Router  = express.Router();
const keys = require('../config/keys');
const passport = require('passport');

Router.get('/google',passport.authenticate('google',
	{scope:['profile','email']})
	);


Router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  });

Router.get('/verify',(req,res)=>{
	if(req.user != undefined){
		console.log(req.user);
	}else{
		console.log('Not authorized');
	}
});

Router.get('/logout',(req,res)=>{
	req.logout();
	res.redirect('/');
});

module.exports = Router;