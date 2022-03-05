const contactController= require('../controllers/contact_controller');

class RegisterController{
    async register(data) {
        return  await contactController.add(data);
    };

}

module.exports= new RegisterController();