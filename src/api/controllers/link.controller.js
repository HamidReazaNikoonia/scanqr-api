/* eslint-disable camelcase */
// const multer = require('multer');
const httpStatus = require('http-status');
const qrcode = require('qrcode');
const APIError = require('../utils/APIError');
const Link = require('./../models/link.model');
const File = require('./../models/file.model');
// const upload_ = multer({
//     dest: './uploads'
// })

exports.get = async (req, res, next) => {
  try {
    const Links = await Link.find()
      .populate('file_id');
    res.json({
      status: 200,
      links: Links,
    });
  } catch (err) {
    next(err);
  }
};


exports.create = async (req, res, next) => {
  try {
    const querystr = `${req.body.title}/username`;
    const qrcode_img = await qrcode.toDataURL(`http://192.168.1.4:8080/links/${querystr}`);
    req.body.qrcode_img = qrcode_img;
    const LinkModel = new Link(req.body);
    const savedLink = await LinkModel.save();
    res.json({
      status: 201,
      link: savedLink,
      file: req.file,
    });
  } catch (err) {
    next(err);
  }
};


exports.uploadHandler = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new APIError({
        message: 'File Not Exist',
        errors: 'file not exist',
        status: httpStatus.NOT_FOUND,
      });
    }

    const fileInformation = {
      path_address: req.file.path || '',
      fileName: req.file.filename || '',
    };

    const FileObject = new File(fileInformation);
    const savedFile = await FileObject.save();

    res.json({
      file: savedFile,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

