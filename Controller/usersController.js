const { Book, User, sequelize } = require('../models');



const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');



const usersController = {

    index: async(req, res) => {
        let users = await User.findAll();

        return res.json(users);
    },

    mybooks: (req, res) => {
        return res.render('mybooks')
    },

    registeruser: (req, res) => {
        return res.render('registeruser')
    },

    myprofile: (req, res) => {
        return res.render('myprofile', { userlogin: req.session.usersOn })
    },


    login: (req, res) => {
        return res.render('login')
    },
    updatepage: (req, res) => {
        return res.render('updatepage', { userlogin: req.session.usersOn })
    },

    auth: async(req, res) => {
        const { email, password } = req.body;

        const users = await User.findOne({
            where: { email }
        });

        if (users && bcrypt.compareSync(password, users.password)) {
            req.session.usersOn = users;
            return res.redirect('/users/myprofile');
        } else {
            return res.redirect('/users/login');
        }
    },

    create: async(req, res) => {
        const {
            name,
            email,
            password,
            gender,
            date_of_birth,
            phone_number,
            street,
            number,
            complement,
            neighborhood,
            city,
            state,
            zip_code
        } = req.body;

        const passwordCrypt = bcrypt.hashSync(password, 10);
        const user_id = uuidv4();

        const newUsers = await User.create({
            id: uuidv4(),
            name,
            email,
            password: passwordCrypt,
            gender,
            date_of_birth,
            phone_number,
            street,
            number,
            complement,
            neighborhood,
            city,
            state,
            zip_code

        });

        return res.json(newUsers);
    },

    update: async(req, res) => {
        const { id } = req.session.usersOn;
        const {
            name,
            email,
            password,
            gender,
            date_of_birth,
            phone_number,
            street,
            number,
            complement,
            neighborhood,
            city,
            state,
            zip_code
        } = req.body;

        const passwordCrypt = bcrypt.hashSync(password, 10);

        const user = await User.update({
            name,
            email,
            password: passwordCrypt,
            gender,
            date_of_birth,
            phone_number,
            street,
            number,
            complement,
            neighborhood,
            city,
            state,
            zip_code
        }, {
            where: { id }
        });

        return res.redirect(`/users/myprofile`);
    },

    delete: async(req, res) => {
        const { id } = req.session.usersOn
        
        const deletedBook = await Book.destroy({
            where: { users_id: id  
            }
        });
        const Users = await User.destroy({
            where: { id }
        });
        
        return res.json(Users);
    }

    

}

module.exports = usersController;