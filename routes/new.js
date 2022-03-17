const express = require('express');

const { body,validationResult } = require('express-validator');

let arrayOfContacts = require('../db/add_contacts');

let contactController = require('../controllers/contact_controller');

let createdId=require('../public/js_folder/create_id');

const router = express.Router();



router.get('/', (req, res) => {

    res.render('new_index', { title: 'Contacts', array:arrayOfContacts });

});
router.post('/',

    body('name').isLength({min:2}).withMessage('Enter a name that contains more then 1 symbol').matches(/^[A-Z]{1}[a-z]+$/,'g').withMessage('INVALID NAME The name should start with capital letter and should not contain any special characters '),
    body('surname').isLength({min:2}).withMessage('Enter a name that contains more then 1 symbol').matches(/^[A-Z]{1}[a-z]+(([',. -][A-Za-z])?[A-Za-z]*)*$/ ,'g').withMessage(`INVALID SURNAME The surname should start with capital letter it may contain   ' , . -   characters in the middle`),
    body('phone').isLength({min:9}).withMessage('Enter a phone number that contains more then 8 symbol').matches(/(^[0]{1}((([9]{1}[1]{1}){1})|(([9]{1}[3]{1}){1})|(([9]{1}[4]{1}){1})|(([9]{1}[5]{1}){1})|(([9]{1}[8]{1}){1})|(([9]{2}){1})|(([7]{2}){1})|(([5]{2}){1})))+(\d{6})*/,'g').withMessage('INVALID PHONE Enter an armenian mobile phone number that\'s start with 0'),


   (req, res) => {

        let errors = validationResult(req);

               if (!errors.isEmpty()) {
            if( req.body.id === 'idValue') {
               
                return res.render('contact',{status:400,errors: errors.array() });


            }

            if((req.body.id !== 'idValue') && !(typeof req.body.id === 'undefined')){

                let idOfContact=req.body.id;

                let contactOfPerson = arrayOfContacts.find(item => item.id === idOfContact);

                return res.render('edit_contact',{status:400,errors: errors.array(),contact:contactOfPerson });


            }

        }

    try {


const idOfContact = req.body.id;

        let newId = createdId();

        const contact = arrayOfContacts.find(item => item.id === idOfContact);

        if(typeof contact === 'undefined') {

          contactController.add({
                id: req.body.id + newId,
                name: req.body.name,
                surname: req.body.surname,
                phone: req.body.phone,

            });
           
           

    res.render('new_index', { title: 'Contacts', array:arrayOfContacts});

        }
     if(contact){

         contactController.add({
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