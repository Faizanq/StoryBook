const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

//Create User model

const UserSchema = new Schema({
	googleID:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	firstName:{
		type: String,
		// required: true
	},
	lastName:{
		type: String,
		// required: true
	},
	profileImage:{
		type: String
	}

});

//Create user collection from our schema

	return mongoose.model('users',UserSchema);