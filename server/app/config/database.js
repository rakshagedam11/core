const { Sequelize } = require('sequelize');
const { logger } = require('../lib/myf.velixs.js');

const { DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_CONNECTION } = process.env;
let sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql'
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    dialect: DB_CONNECTION,
    logging: false,
});

function connectDatabase() {
    sequelize
        .authenticate()
        .then(() => {
            logger('info', `[DB] Connection Database has been established Successfully`);
        })
        .catch((error) => {
            logger('error', `[DB] Unable to connect to the database: ${error}`);
            process.exit(1);
        });
}

module.exports = {
    sequelize,
    connectDatabase,
};