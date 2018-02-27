const Student = require('../models/student');

const mailer = require('../util/index').mailer;

module.exports = {
	// POST request to add new student
	'newStudent': (req, res) => {
		const newStudent = new Student({
			name: req.body.name,
			email: req.body.email,
			regNo: req.body.regNo,
			mobile: parseInt(req.body.mobile),
			room: req.body.room,
			github: req.body.github,
			linkedin: req.body.linkedin,
			skills: req.body.skills.split(',')
		});

		newStudent.save((err) => {
			if(err) return res.status(200).json({
				status: 400,
				message: 'Failed to insert data',
				info: err
			});
			mailer.send(req.body.email, (err, info) => {
				if(err) return res.status(200).json({
					status: 400,
					message: 'Failed to send email',
					info: err
				});
				res.status(200).json({
					status: 200,
					message: 'Sucessfully added new user',
					info: newStudent
				});
			});
		});
	},

	// GET request to view all students
	'getAll': (req, res) => {
		Student.find({}).exec((err, students) => {
            if (err) {
                res.status(200).json({
                    status: 400,
                    message: "Error in finding students",
                    info: JSON.stringify(err)
                });
            }
            else if(!students) {
                res.status(200).json({
                    status: 400,
                    message: "Error: no students yet",
                    info: JSON.stringify(new Error("Error: no students yet"))
                });
            }
            else {
                res.status(200).json({
                    status: 200,
                    message: "Successfully found students",
                    info: JSON.stringify(students)
                });
            }
        });
	}
}