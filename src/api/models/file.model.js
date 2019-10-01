const mongoose = require('mongoose');



const FileSchema = new mongoose.Schema({
    path_address: String,
    fileName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('File', FileSchema);