const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  qrcode_img: String,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  file_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'File',
    required: true,
  },
  description: String,
  image: String,

});

module.exports = mongoose.model('Link', LinkSchema);
