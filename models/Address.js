module.exports = (sequelize, DataTypes) => {
    
    const Address = sequelize.define(
        'Address', {
            street: DataTypes.STRING,
            number: DataTypes.STRING,
            complement: DataTypes.STRING,
            neighborhood: DataTypes.STRING,
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            zip_code: DataTypes.STRING,
        }, {
            tableName: "addresses",
            timestamps: false
        }
    );

    // Address.associate = (models) => {
    //     Address.hasOne(models.User, { as: "users", foreignKey: "addresses_id" });
    // };

    return Address;

}
