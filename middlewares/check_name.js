const arrayOfContacts = require('../db/add_contacts');


module.exports.checkName = function checkContactName(req, res, next){
    const regexp1=new RegExp(/^[A-Z]{1}[a-z]+$/,'g');

    let nameOfContact = req.body.name;


    if( (regexp1.test(nameOfContact) &&  (nameOfContact.length > 1 ))){
        next()
    }
    else{
        let error = new Error('Invalid name');

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

        if((nameOfContact.length < 2 ) || !(regexp1.test(nameOfContact))){

            next(error)
        }
    }


};