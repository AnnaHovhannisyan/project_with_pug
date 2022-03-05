const express = require('express');
const router = express.Router();
let arrayOfContacts = require('../db/add_contacts');


/* GET users listing. */
router.get('/', function(req, res) {

    res.render('contact', { title: 'Contacts',array:arrayOfContacts });

});

router.post('/', function(req, res) {

    res.render('contact', { title: 'Contacts', array:arrayOfContacts });

});

module.exports = router;