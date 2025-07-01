const { Sequelize } = require('sequelize');
const { logger } = require('../lib/myf.velixs.js');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
  }
);

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