const { Sequelize, DataTypes } = require('sequelize');

module.exports = (Sequelize, DataTypes) => {
    const patientDetails = Sequelize.define('patientDetails', {
        id: {
            type: DataTypes.INTEGER,
            autoIncreament: true,
            primaryKey: true,
        },
        patientName: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        patientEmail: {
            type: DataTypes.STRING(75),
            allowNull: false,
        },
        patientProblem: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        patientMobile: {
            type: DataTypes.STRING(12),
            allowNull: false,
        },
        patientAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return patientDetails;
};
