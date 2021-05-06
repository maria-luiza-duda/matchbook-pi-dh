const { Book, sequelize } = require('../models');

module.exports = async (req, res, next) => {

    let { name, author, publisher,, description } = req.body;


    if (!name || !author || !publisher || !description ) {
        res.status(400).json({ erro: "Required field" });
    } else {

        next()
    }
}
