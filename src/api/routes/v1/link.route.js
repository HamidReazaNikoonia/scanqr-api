const express = require('express');
const multer = require('multer');
const path = require('path');
const linkController = require('./../../controllers/link.controller');

const Router = express.Router();

Router
  .route('/')
  .get(linkController.get)
  .post(linkController.create);


const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
  },
});

const upload_ = multer({
  storage,
});


Router
  .post('/upload', upload_.single('file'), linkController.uploadHandler);

module.exports = Router;

