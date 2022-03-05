const express = require('express');
const router = express.Router();
let arrayOfContacts = require('../db/add_contacts');
let registerController = require('../controllers/register_controller');
let createdId=require('../public/js_folder/create_id');
const { body,validationResult } = require('express-validator');
let  { checkName } = require('../middlewares/check_name');
let  { checkSurname } = require('../middlewares/check_surname');
let  { checkPhone } = require('../middlewares/check_phone');


router.get('/', function(req, res) {

    res.render('contact', { title: 'Contacts', array:arrayOfContacts });

});
router.post('/',
     checkName,
    checkSurname,
    checkPhone,

    body('name').isLength({min:2}),
    body('surname').isLength({min:2}),
    body('phone').isLength({min:8}),


    async (req, res) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('error',{status:400,errors: errors.array() });
    }

const idOfContact = req.body.id;

        let newId = createdId();

        const contact = arrayOfContacts.find(item => item.id === idOfContact);

        if(typeof contact === 'undefined') {

            const user = await registerController.register({
                id: req.body.id + newId,
                name: req.body.name,
                surname: req.body.surname,
                phone: req.body.phone,

            });


     res.render('new_index', { title: 'Contacts', array:arrayOfContacts ,user:user});
        }
        else if(contact){

           await registerController.register({
                id: contact.id,
                name: req.body.name,
                surname: req.body.surname,
                phone: req.body.phone,

            });

            res.render('new_index', { title: 'Contacts', array:arrayOfContacts});
        }


    } catch (e) {
        console.log(e);
    }
}

    );

module.exports = router;