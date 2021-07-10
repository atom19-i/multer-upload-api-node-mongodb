"use strict";

const express = require("express");
const { upload } = require("../helpers/filehelper");
const { singleFileUpload } = require("../controllers/fileuploadController");
const qpapers = require("../controllers/qpapers.controller");
const Qpapers = require("../models/file");
const router = express.Router();

//to convert object id to string
// String.prototype.toObjectId = function () {
//   var ObjectId = require("mongoose").Types.ObjectId;
//   return new ObjectId(this.toString());
// };



// done
// uploading single file
router.post("/singleFile", upload.single("file"), singleFileUpload);


//Done
// Retrieve all
router.get("/find/all", qpapers.findAll);


//Done
// Retrieve all pdf type question papers
router.get("/pdf", qpapers.findAllPdf);

// Done
// delete all papers in one go, returns a message on qpaper deletion counts
router.delete("/deleteAll", qpapers.deleteAll);


// DONE 
// Retrieve a single question paper with id
// postman url - http://...../find/60e8a10e6c4952443c899acc ; not 'find?'
router.get("/find/:file_id", qpapers.findOne);


//Done 
//source : https://www.youtube.com/watch?v=WDrU305J1yw 
//timestamp - 32:21
// Update a single question paper with id
router.patch("/update/:file_id",qpapers.update);


// DONE - Delete a question paper with id
//postman url - http://www.localhost:3030/api/delete/60e96b27796e990b20f3ab9b
// remove() -> deprecated
//findOneAndDelete() returns the deleted document after having deleted it ;
// deleteOne() is used to delete a single document
router.post("/delete/:file_id", qpapers.deleteSinglePaper);



module.exports = {
  routes: router,
};
