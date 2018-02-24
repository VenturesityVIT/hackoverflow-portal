const bodyParser = require('body-parser');

const router = require('express').Router();

const studentController = require('../controllers/studentController');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/new-student', (req, res) => {
	studentController.newStudent(req, res);
});

router.get('/student', (req, res) => {
	studentController.getAll(req, res);
});

module.exports = router;