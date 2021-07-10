"use strict";

const Qpapers = require("../models/file");

exports.findAll = (req, res) => {
  Qpapers.find({})
    .then((files) => {
      if (!files) {
        res.status(404).send(err);
      }
      res.send(files);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// fill here sem/course or branch - example
//MAKE CHANGE HERE
// currently gives pdf type files
exports.findAllPdf = (req, res) => {
  Qpapers.find({ fileType: "application/pdf" })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.deleteAll = (req, res) => {
  Qpapers.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Question Papers were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all Question papers.",
      });
    });
};

exports.findOne = (req, res) => {
  const fileId = req.params.file_id;
  console.log(fileId);
  Qpapers.findById(fileId)
    .exec()
    .then((file) => {
      console.log(file);
      res.status(200).json({ file });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.update = (req, res) => {
  const fileId = req.params.file_id;
  console.log(fileId);
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Qpapers.updateMany({ _id: fileId }, { $set: updateOps })
    .exec()
    .then((file) => {
      console.log("file Id " + fileId + " updated!");
      res.status(200).json({ message: "file updated!", file });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.deleteSinglePaper = (req, res) => {
  const fileId = req.params.file_id;
  console.log(fileId);
  Qpapers.findOneAndDelete({ _id: fileId })
    .exec()
    .then((file) => {
      console.log("removed file: " + file);
      res.status(200).json({ file });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};


