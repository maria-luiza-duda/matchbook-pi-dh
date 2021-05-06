module.exports = (sequelize, DataTypes) =>{
    
    const Genere = sequelize.define(
        'Genere', {
            nameGeneres: DataTypes.STRING,
        }, {
            tableName: "generes",
            timestamps: false
        }
    );

    Genere.associate = (models) => {
        Genere.hasMany(models.Book, { as: "books", foreignKey: "generes_id" });
        Genere.hasMany(models.Interest, { as: "interests", foreignKey: "generes_id" });
    };

    return Genere;

};