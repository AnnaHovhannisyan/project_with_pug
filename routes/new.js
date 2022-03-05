const express = require('express');
const router = express.Router();
let arrayOfContacts = require('../db/add_contacts');
let registerController = require('../controllers/register_controller');
let createdId=require('../public/js_folder/create_id');
const { body,validationResult } = require('express-validator');



router.get('/', function(req, res) {

    res.render('contact', { title: 'Contacts', array:arrayOfContacts });

});
router.post('/',

    body('name').isLength({min:2}).withMessage().matches(/^[A-Z]{1}[a-z]+$/,'g').withMessage('Invalid name'),
    body('surname').isLength({min:2}),
    body('phone').isLength({min:8}),


    async (req, res) => {
        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.render('contact',{status:400,errors: errors.array() });
        }

    try {


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
       /* const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('error',{status:400,errors: errors.array() });
        }*/
    }
}

    );

module.exports = router;