const { Interest, sequelize } = require('../models');
const { v4:uuidv4 } = require('uuid');

const interestsController = {

    index: async (req, res) => {
        let interests = await Interest.findAll();

        return res.json(interests);
    },

    create: async (req, res) => {
        const { users_id, generes_id } = req.body;
        const newInterest = await Interest.create({
            id: uuidv4(),
            users_id,
            generes_id
        });

        return res.json(newInterest);
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { users_id, generes_id } = req.body;

        const interest = await Interest.update({
            users_id,
            generes_id
        }, {
            where: { id }
        });


        return res.json(interest);
    },

    delete: async (req, res) => {
        const { id } = req.params;

        const interest = await Interest.destroy({
            where: { id }
        });

        return res.json(interest);
    }
}

module.exports = interestsController;