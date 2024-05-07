const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");
const todos = require("./routes/todo.js");
require("dotenv").config();

//Mongoose Connection
main().catch((err) => console.log(err));

async function main() {
  //await mongoose.connect("mongodb://127.0.0.1:27017/todos");
  // await mongoose.connect(
  //   "mongodb+srv://PrakashKumar:<Prakash1234@>@cluster0.qrobg9v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  // );
  await mongoose.connect(
    // "mongodb+srv://PrakashKumar:1234@cluster0.qrobg9v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    process.env.MONGO_URL
  );
  console.log("We have connected to the database.");
}

server.use(express.json());
server.use(cors());
server.use("/todos", todos.Result);
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log("Server has started");
});
