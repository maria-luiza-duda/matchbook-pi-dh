const Matchbook = require("../models/Matchbook");
const {v4:uuidv4} = require('uuid');

const matchbookController = {
    index: async (request, response) => {
        let matchbook =  await Matchbook.findAll();
        
        return response.json(books);
    },

    create: async (request, response) => {
        let {users_id, book_id} = request.body;

        let newMatchbook = await Matchbook.create({
            id:uuidv4(), 
            users_id,
            book_id
        });

        return response.json(newMatchbook);
    },

    delete: async (request, response) => {
        const { id } = request.params;

        const matchbook = await Matchbook.destroy({
            where: { id }
        });

        return response.json(matchbook);
    }
}

module.exports = matchbookController;