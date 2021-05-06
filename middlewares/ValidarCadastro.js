const {User,sequelize} = require('../models');

module.exports = async (req, res,next) => {
  
    let {name, password, email, date_of_birth, gender, phone_number} = req.body;
    let users = await User.findAll({where: {email}});

    if(!name || !email || !date_of_birth || !gender || !phone_number ){
        res.status(400).json({erro: "Required field"});
        }else{
          if(!password || password.length < 6 || password.length > 12){
                res.status(400).json({erro: "invalid password"});
                }else{
                    if(users.length){
                    res.status(400).json({erro: "Email already registered in our database."});
                
                }else{
                
                 next()
            }
        }
    }
}