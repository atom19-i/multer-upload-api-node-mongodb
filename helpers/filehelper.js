'use strict' ;

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file,cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
}) ;

const filefilter = (req, file, cb) => {
    if(file.mimetype === 'application/pdf'){
        cb(null,true);
    } else {
        cb(null,false);
    }
}

const upload = multer({ storage: storage, fileFilter: filefilter});

module.exports = { upload }