module.exports = (Sequelize, DataTypes) => {
    const Users = Sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncreament: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        password: {
            type: DataTypes.INTEGER(12),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(75),
        },
    });
    return Users;
};
