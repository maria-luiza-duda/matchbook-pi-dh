module.exports = (sequelize, DataTypes) => {

    const Matchbook = sequelize.define(
        'Matchbook', {
        status: DataTypes.INTEGER,
        //data: DataTypes.DATETIME,
        users_id: DataTypes.INTEGER,
        books_id: DataTypes.INTEGER
    }, {
        tableName: "matchbook",
        timestamps: false
    }
    );

    return Matchbook;

};