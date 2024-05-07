const mongoose = require("mongoose");
const { Schema } = mongoose;

exports.todoSchema = new Schema({
  todo: { type: String, required: [true, "This is basically required"] },
  done: { type: Boolean, required: [true, "This is basically required"] },
});
