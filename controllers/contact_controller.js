const Contacts = require('../db/add_contacts');



class ContactController{

    async add(data) {
        let { id }=data;
        for await(let h of Contacts){
            let {id:idOfContact } = h;

            if(id === idOfContact){
                Contacts.splice(Contacts.indexOf(h),1)
            }
        }

        Contacts.push(data);


return Contacts;
    }

}

module.exports= new ContactController();