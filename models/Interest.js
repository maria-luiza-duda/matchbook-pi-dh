module.exports = (sequelize, DataTypes) =>{
    
    const Interest = sequelize.define(
        'Interest', {
            users_id: DataTypes.STRING,
            generes_id: DataTypes.STRING
        }, {
            tableName: "interests",
            timestamps: false
        }
    );

    Interest.associate = (models) => {
        Interest.belongsTo(models.Genere, { as: "generes", foreignKey: "generes_id" });
        Interest.belongsTo(models.User, { as: "users", foreignKey: "users_id" });
    };

    return Interest;

};