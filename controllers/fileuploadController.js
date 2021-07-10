'use strict';
const singlefile = require('../models/file');

const mongoose = require('mongoose');

const singleFileUpload = async (req, res, next) => {
    try{
        const file = new singlefile({
            _id : new mongoose.Types.ObjectId(),
            fileName: req.file.originalname, 
            fileType: req.file.mimetype,
            // fileSize: fileSizeFormatter(req.file.size, 2) // 0.00 defsult
        });
        await file.save();
        res.status(201).send('file uploaded successfully');
    } catch(error) {
        res.status(400).send(error.message);
    }
}

//bytes to kb or mb
const fileSizeFormatter = (bytes, decimal) => {
    if(bytes==0){
        return '0 Bytes';
    } 
    const dm = decimal ||  2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const index = Math.floor(Math.log(bytes)/Math.log(1000));
    return parseFloat((bytes / MSGraphicsTrust.pow(1000,index)).toFixed(dm)) + '-' + sizes[index];
}

module.exports = {
    singleFileUpload
}