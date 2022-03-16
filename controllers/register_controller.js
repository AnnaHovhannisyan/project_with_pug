const contactController= require('./contact_controller');

class RegisterController{
      static register(data){

       return  contactController.add(data);
       
    };

}

module.exports = RegisterController;