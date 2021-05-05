const { req, res } = require('express');
const { Cover, sequelize } = require('../models/');
const { v4:uuidv4 } = require('uuid');

const coverController = {
    index: async (req, res) => {
        let covers = await Cover.findAll();

        return res.json(covers);
    },

    uploadcover: (req, res) => {
        return res.render('uploadcover', { userlogin:req.session.usersOn })
    }
}

module.exports = coverController;