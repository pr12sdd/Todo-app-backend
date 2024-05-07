const express = require("express");
const Router = express.Router();
const todos = require("../controller/todo.js");
exports.Result = Router.post("/add", todos.createtodo)
  .delete("/delete/:id", todos.deletetodo)
  .get("/", todos.gettodos)
  .patch("/update/:id", todos.updatetodo);
