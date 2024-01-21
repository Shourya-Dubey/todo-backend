const express = require("express");
const router = express.Router();

//import controller
const{createTodo} = require("../controllers/createTodo");
const { getAllTodo, getTodoById } = require("../controllers/getAllTodo");
const {deleteTodo} = require("../controllers/deleteTodo");
const {updateTodo} = require("../controllers/updateTodo");

//define API routes
router.post("/createTodo", createTodo);
router.get("/getalltodo", getAllTodo);
router.get("/gettodo/:id", getTodoById);
router.delete("/deleteTodo/:id", deleteTodo);
router.put("/updateTodo/:id", updateTodo);

module.exports = router;