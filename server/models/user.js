var mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose');

var User = new mongoose.Schema({
	email: {
		type: String,
		required: '{PATH} is required!'
	}
});

User.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model('User', User);
