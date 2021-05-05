const { Book, sequelize } = require('../models');

module.exports = async (req, res, next) => {

    let { name, author, publisher, generes, description } = req.body;


    if (!name || !author || !publisher || !generes || !description ) {
        res.status(400).json({ erro: "Required field" });
    } else {

        next()
    }
}