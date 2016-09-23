var router = require('express').Router();
var multer  = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })

router.get('/testRouter', function(req, res) {
	res.send('Test Route Successfully. ^.^');
});

router.post('/uploadFile', upload.single('file'), function(req, res) {
	console.log(req.body) // form fields
    console.log(req.file) // form files
    res.status(204).end()
});

module.exports = router;