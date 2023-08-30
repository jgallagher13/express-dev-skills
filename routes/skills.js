var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var skillsCtrl = require('../controllers/skills')

// All actual paths start with "/skills"
router.get('/', skillsCtrl.index)

// GET /todos/new
router.get('/new', skillsCtrl.new)

// GET /skills/:id
router.get('/:id', skillsCtrl.show)

// POST /todos
router.post('/', skillsCtrl.create);

router.delete('/:id', skillsCtrl.delete)


module.exports = router;
