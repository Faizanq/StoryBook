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
    res.redirect('dashboard');
  });

module.exports = Router;