const express = require("express");
const router = express.Router();

//import controller
const{createTodo} = require("../controllers/createTodo");
const { getAllTodo, getTodoById } = require("../controllers/getAllTodo");

//define API routes
router.post("/createTodo", createTodo);
router.get("/getalltodo", getAllTodo);
router.get("/gettodo/:id", getTodoById);

module.exports = router;