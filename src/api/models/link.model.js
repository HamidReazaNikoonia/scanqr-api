const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  qrcode_img: String,
  file_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  description: String,
  image: String,

});

module.exports = mongoose.model('Link', LinkSchema);
