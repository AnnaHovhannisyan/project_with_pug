const validatePhoneNumber = require('validate-phone-number-node-js');
const arrayOfContacts = require('../db/add_contacts');


module.exports.checkPhone = function checkContactPhone(req, res, next){
   /* let regexp1=new RegExp(/^[A-Z]{1}[a-z]+$/,'g');
    let regexp2=new RegExp(/^[A-Z]{1}[a-z]+(([',. -][A-Za-z])?[A-Za-z]*)*$/ ,'gi');*/
    const regexp= new RegExp(/([0]{1})?([1-9]{2})(\d{6})/,'g');



    let result = validatePhoneNumber.validate("" + req.body.phone);

    let nameOfContact = req.body.name;

    if(result && regexp.test(req.body.phone) ){
        next()
    }
    else{

        let err = new Error('Invalid phone number');

        if( req.body.id === 'idValue') {

            res.redirect('/contacts');


        }else if((req.params.id )){


            res.redirect(`/edit/${req.params.id}`);


        }else if((req.body.id !== 'idValue')){

            res.redirect(`/edit/${req.body.id}`);

        }else if(typeof req.body.id === 'undefined'){
            let idOfReq;
            for(let item of arrayOfContacts){
                let {id:idOfCont, name:nameOfCont} = item;
                if(nameOfContact === nameOfCont){
                   idOfReq = idOfCont;

                }
            }
            res.redirect(`/edit/${idOfReq}`);
        }



        if(!result || regexp.test(req.body.phone)){

            next(err)
        }


    }


};
