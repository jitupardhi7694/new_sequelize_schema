const dbConfig = require('../config/dbConfig');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DATABASE,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        },
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log('database is connected to server');
    })
    .catch((err) => {
        console.log('Error ' + err);
    });

const db = {};

db.Sequelize = Sequelize;

db.sequelize = sequelize;

db.user = require('./userModule')(sequelize, DataTypes);
db.patientDetails = require('./patientDetailsModule')(sequelize, DataTypes);

db.sequelize
    .sync({ force: false })
    .then(() => {
        console.log('yes re-sync is done');
    })
    .catch((err) => {
        console.log('error in resync' + err);
    });

module.exports = db;
