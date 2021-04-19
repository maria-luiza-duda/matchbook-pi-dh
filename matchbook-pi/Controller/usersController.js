const {User, sequelize} = require('../models');

const usersController = {

    index: async (req, res) => {
        let users =  await User.findAll();
       
        return res.json(users);
    },
  
    create: async (req, res) => {
        const {name, password, email, date_of_birth, gender, phone_number} = req.body;
        const newUsers = await User.create ({
         name,
         password,
         email,
         date_of_birth,
         gender,
         phone_number
        });
        

        return res.json(newUsers);
   },

   update: async (req,res) => {
    const {id} = req.params;
    const {name, password, email, date_of_birth, gender, phone_number} = req.body;

    const user = await User.update({
         name,
         password,
         email,
         date_of_birth,
         gender,
         phone_number
    }, {
        where: {id}
    });

    
    return res.json(user);
},

delete: async (req, res) => {
    const {id} = req.params;

    const Users = await User.destroy({
        where: {id}
    });

    return res.json(Users);
}

}



module.exports = usersController;