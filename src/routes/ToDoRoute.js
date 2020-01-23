var express = require("express");
var router = express.Router();
var { getListToDo, findToDoById, createToDo, updateToDo, deleteToDo } = require('../services/ToDoService');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get('/', getListToDo);
router.get('/:id', findToDoById);
router.post('/', createToDo);
router.patch('/:id', updateToDo);
router.delete('/:id', deleteToDo);

module.exports = router;