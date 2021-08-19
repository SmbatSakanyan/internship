const express = require("express");
const  {getHotels,createHotel} = require('../controllers/hotelController') ;
const formidable = require('express-formidable');
const  checkSignin  = require('../middlewares');

const multer  = require('multer')

const upload = multer({ dest: 'uploads/' })

const router = express.Router();

router.post('/',upload.single('image'),checkSignin, createHotel);
router.get('/',getHotels);

module.exports = router;