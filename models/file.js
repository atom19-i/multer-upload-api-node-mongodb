const mongoose = require('mongoose');

const Schema = mongoose.Schema ;

const qpaper = new Schema({
    _id: {
        type: mongoose.Types.ObjectId, 
        auto: true
    },
    fileName: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    // fileSize: {
    //     type: String,
    //     required: true
    // }
},  {timestamps: true}
);

module.exports = mongoose.model('QuestionPapers', qpaper);