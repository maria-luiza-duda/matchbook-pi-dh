
const { request, response } = require('express');
const { Book, sequelize } = require('../models/');

const booksController = {
    index: async (request, response) => {
        let books =  await Book.findAll();
        
        return response.json(books);
    },

    create: async (request, response) => {
        let {name, author, description, publisher, generes_id, users_id} = request.body;

        let newBook = await Book.create({
            name,
            author,
            description,
            publisher,
            generes_id,
            users_id,
            // generes_id1, // pode estar errado no banco & é necessario na hora do create ou é apenas uma foreingKey
            //users_id1:  // pode estar errado no banco & é necessario na hora do create ou é apenas uma foreingKey
        });

        return response.json(newBook);
    },
    update: async (request, response) => {
        let { id } = request.params;
        let {name, author, description, publisher, generes_id, users_id} = request.body;

        let updatedBook = await Book.update({
            name,
            author,
            description,
            publisher,
            generes_id,
            users_id
        }, {
            where: { id }
        })

        return response.send(updatedBook);
    },
    delete: async (request, response) => {
       
        let { id } = request.params;

        const deletedBook = await Book.destroy({
            where: {id}
        });

        return response.json(deletedBook);
        
    },

    show: async(request, response) => {
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
