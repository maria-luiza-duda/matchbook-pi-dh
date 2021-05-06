
const { request, response } = require('express');
const { User, Book, sequelize } = require('../models/');
const { v4:uuidv4 } = require('uuid');


const booksController = {
    index: async (request, response) => {
        let books = await Book.findAll();

        return response.render('mybooks', { listaBooks: books });
    },
    
    registerbook: (request, response) =>{
        
        return response.render('registerbook', { userlogin:request.session.usersOn })
    },

    updatedBook: async (request, response) =>{
        const id = request.params

        const updatebook = await Book.findOne({
            where: { id}
        });
        

        return response.json(updatebook)
    },


    create: async (request, response) => {
        let { name, author, description, publisher, generes_id, cover, users_id } = request.body;

        let newBook = await Book.create({
            id: uuidv4(),
            name,
            author,
            description,
            publisher,
            generes_id,
            users_id,
            cover
        });

        return response.redirect('/books/mybooks');
    },
    update: async (request, response) => {
        let { id } = request.params;
        let { name, author, description, publisher, generes_id, users_id, cover } = request.body;

        let updatedBook = await Book.update({
            name,
            author,
            description,
            publisher,
            generes_id,
            users_id,
            cover
        }, {
            where: { id }
        })

        return response.send(updatedBook);
    },

    delete: async (request, response) => {

        let { id } = request.params

        const deletedBook = await Book.destroy({
            where: { id }
        });

        return response.json(deletedBook);

    },

    auth: async(req, res) => {
        const { email, password } = req.body;

        const users = await User.findOne({
            where: { email }
        });

        if (users && bcrypt.compareSync(password, users.password)) {
            req.session.usersOn = users;
            return res.redirect('/books/list');
        } else {
            return res.redirect('/users/login');
        }
    },

    show: async (request, response) => {
        const { id } = request.session.usersOn;
        

        const booksforUser = await Book.findAll({
            where: {
                users_id: id
            }
        });

       

        return response.render('registeredBooks', { listaBooks: booksforUser });
    }

}

module.exports = booksController;
