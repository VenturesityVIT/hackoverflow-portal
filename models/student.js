const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = Schema({
	name: {
		type: String,
		required: true
	},

	email: {
		type: String,
		required: true,
		unique: true
	},

	regNo: {
		type: String,
		required: true,
		unique: true
	},

	mobile: {
		type: Number,
		required: true,
		unique: true
	},

	room: {
		type: String,
		required: true
	},

	github: {
		type: String,
		unique: true
	},

	linkedin: {
		type: String,
		unique: true
	},

	skills: {
		type: [String]
	}

});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;