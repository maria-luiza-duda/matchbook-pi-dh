module.exports = (sequelize, DataTypes) =>{
    
    const Book = sequelize.define(
        'Book',{
            name: DataTypes.STRING,
            author: DataTypes.STRING,
            description: DataTypes.STRING,
            publisher: DataTypes.STRING,
            generes_id: DataTypes.STRING,
            users_id: DataTypes.STRING,
            cover: DataTypes.STRING
        }, {
            tableName: "books",
            timestamps: false
        }
    );

    Book.associate = (models) => {
        Book.belongsTo(models.User, { as: "users", foreignKey: "users_id" });
        Book.belongsTo(models.Genere, { as: "generes", foreignKey: "generes_id" });
    };

    return Book;

};