const mongoose = require("mongoose");

const schema = require("../models/todo.js");

const Tasks = mongoose.model("Tasks", schema.todoSchema);

exports.createtodo = (req, res) => {
  const task = new Tasks(req.body);
  console.log(req.body);
  task
    .save()
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.gettodos = async (req, res) => {
  const value = await Tasks.find();
  res.json(value);
};

exports.deletetodo = async (req, res) => {
  const value = req.params.id;
  const result = await Tasks.findOneAndDelete({ _id: { $eq: value } });
  res.json(result);
};

exports.updatetodo = async (req, res) => {
  console.log(req.body);
  const data = req.params.id;
  const result = await Tasks.findOneAndUpdate(
    { _id: { $eq: data } },
    req.body,
    { new: true }
  );
  res.json(result);
};
