
const { request, response } = require('express');
const { Book, sequelize } = require('../models/');
const { v4:uuidv4 } = require('uuid');


const booksController = {
    index: async (req, res) => {
        let books = await Book.findAll();

        return res.json(books);
    },
    // index: async (request, response) => {
    //     let books = await Book.findAll();

    //     return response.render('mybooks', { listaBooks: books });
    // },
    
    registerbook: (request, response) =>{
        
        return response.render('registerbook', { userlogin:request.session.usersOn })
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

        return response.json(newBook);
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

        let { id } = request.params;

        const deletedBook = await Book.destroy({
            where: { id }
        });

        return response.json(deletedBook);

    },

    show: async (request, response) => {
        const { id } = request.params;

        const booksforUser = await Book.findAll({
            where: {
                users_id: id
            }
        });

        return response.json(booksforUser);
    }

}

module.exports = booksController;
