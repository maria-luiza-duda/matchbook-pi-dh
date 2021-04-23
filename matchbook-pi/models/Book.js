module.exports = (sequelize, DataTypes) =>{
    
    const Book = sequelize.define(
        'Book',{
            name: DataTypes.STRING,
            author: DataTypes.STRING,
            description: DataTypes.STRING,
            publisher: DataTypes.STRING,
            generes_id: DataTypes.INTEGER,
            users_id: DataTypes.INTEGER
        }, {
            tableName: "books",
            timestamps: false
        }
    );

    Book.associate = (models) => {
        Book.belongsTo(models.User, { as: "user", foreignKey: "users_id" });
        Book.belongsTo(models.Genere, { as: "genere", foreignKey: "generes_id" });
    };

    return Book;

};