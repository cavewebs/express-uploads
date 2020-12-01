var express = require('express');
var router = express.Router();
const multerConfig = require('../config/multer')
const userController = require('../controllers/users')

router.post('/single-picture-upload', userController.uploadSingleFile);

router.post('/multiple-picture-upload', multerConfig.singleUpload, userController.uploadMultiPic);

module.exports = router;
