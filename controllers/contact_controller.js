const Contacts = require('../db/add_contacts');

class ContactController {
  
 static add(data){
  
    let idOfCont = data.id;
    let contact = Contacts.find(item => item.id === idOfCont);
    if(contact){
        Contacts.splice(Contacts.indexOf(contact), 1);  
    }
     
    Contacts.push(data);


  }

}

module.exports = ContactController;
