module.exports = (sequelize, DataTypes) =>{
    
    const Cover = sequelize.define(
        'Cover',{
            filename: DataTypes.STRING
        }, {
            tableName: "covers",
            timestamps: false
        }
    );

    Cover.associate = (models) => {
        Cover.belongsTo(models.Book, { as: "cover", foreignKey: "covers_id" });
    };

    return Cover;

};