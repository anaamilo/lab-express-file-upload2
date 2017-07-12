var express = require('express');
var router = express.Router();
var multer  = require('multer');

var pictures = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', pictures:pictures });
});

// Route to upload from project base path
var upload = multer({ dest: './public/uploads/' });

router.post('/upload',upload.single('photo'),function(req, res, next) {
  console.log(req.body);
  console.log(req.file);
  pictures.push({
    "imgURL": req.file.filename,
    "name": req.body.name
  });
  res.redirect('/');
});

module.exports = router;
