const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

let error = new Error('Invalid data');

    res.render('error',{title: 'Error',error:error});

});

module.exports = router;