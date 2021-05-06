module.exports = (sequelize, DataTypes) =>{
    
    const User = sequelize.define(
        'User', {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            gender: DataTypes.STRING,
            date_of_birth: DataTypes.STRING,
            phone_number: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.STRING,
            complement: DataTypes.STRING,
            neighborhood: DataTypes.STRING,
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            zip_code: DataTypes.STRING,
        }, {
            tableName: "users",
            timestamps: false
        }
    );

    User.associate = (models) => {
        // User.belongsTo(models.Address, { as: "addresses", foreignKey: "addresses_id" });
        User.hasOne(models.Interest, { as: "interests", foreignKey: "users_id" });
        User.hasMany(models.Book, { as: "books", foreignKey: "users_id" });
    };

    return User;

};
