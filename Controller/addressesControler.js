const { Address, sequelize } = require('../models');
const { v4:uuidv4 } = require('uuid');

const addressesController = {

    index: async (req, res) => {
        let addresses = await Address.findAll();

        return res.json(addresses);
    },

    endereco: (req, res) => {
        return res.render('endereco')
    },
    
    create: async (req, res) => {
        const { street, number, complement, neighborhood, city, state, zip_code } = req.body;
        const newAddress = await Address.create({
            id: uuidv4(),
            street,
            number,
            complement,
            neighborhood,
            city,
            state,
            zip_code
        });

        return res.json(newAddress);
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { street, number, complement, neighborhood, city, state, zip_code } = req.body;

        const address = await Address.update({
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

        return res.json(address);

    },

    delete: async (req, res) => {
        const { id } = req.params;

        const address = await Address.destroy({
            where: { id }
        });

        return res.json(address);
    }
}

module.exports = addressesController;
