const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    file_path: {
        type: String,
        required: true
    },
    file_name: String,
    describtion: String,
    image: String
})

module.exports = mongoose.model('Link', LinkSchema );