const { Genere, sequelize } = require('../models');
const { v4:uuidv4 } = require('uuid');


const generesController = {

    index: async (req, res) => {
        let generes = await Genere.findAll();

        return res.json(generes);
    },

    create: async (req, res) => {
        const { nameGeneres } = req.body;
        const newGeneres = await Genere.create({
            id: uuidv4(),
            nameGeneres
        });


        return res.json(newGeneres);
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { nameGeneres } = req.body;

        const genere = await Genere.update({
            nameGeneres
        }, {
            where: { id }
        });

        return res.json(genere);

    },

    delete: async (req, res) => {
        const { id } = req.params;

        const generes = await Genere.destroy({
            where: { id }
        });

        return res.json(generes);
    }

}

module.exports = generesController;
