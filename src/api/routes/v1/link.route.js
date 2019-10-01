const express = require('express');
const multer = require('multer');
const linkController = require('./../../controllers/link.controller');

const Router = express.Router();

Router
  .route('/')
  .get(linkController.get)
  .post(linkController.create);



const upload_ = multer({
    dest: './uploads'
})


Router
  .post('/upload', upload_.single('file'), linkController.uploadHandler);

  module.exports = Router;

