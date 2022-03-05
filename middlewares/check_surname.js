const arrayOfContacts = require('../db/add_contacts');


module.exports.checkSurname = function checkContactSurname(req, res, next){
    const regexp2 = new RegExp(/^[A-Z]{1}[a-z]+(([',. -][A-Za-z])?[A-Za-z]*)*$/ ,'g');


    let nameOfContact1 = req.body.name;
    let surnameOfContact= req.body.surname;

    if((regexp2.test(surnameOfContact) && (surnameOfContact.length > 1 )) ){
        next()
    }
    else{

        let error1 = new Error('Invalid surname');

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
                if(nameOfContact1 === nameOfCont){
                    idOfReq = idOfCont;

                }
            }
            res.redirect(`/edit/${idOfReq}`);
        }


        if(!(regexp2.test(surnameOfContact)) || ( surnameOfContact.length < 2)){

            next(error1)
        }



    }


};