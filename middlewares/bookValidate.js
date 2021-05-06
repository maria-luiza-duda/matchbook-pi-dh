const { Book, sequelize } = require('../models');

module.exports = async (req, res, next) => {

    let { name, author, description, publisher } = req.body;


    if (!name || !author || !description || !publisher) {
        res.status(400).json({ erro: "Required field" });
    } else {

        next()
    }
}