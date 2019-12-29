const Sequelize = require('sequelize');
require('dotenv').config();
const postgresUser = process.env.POSTGRES_USER;
const postgresPass = process.env.POSTGRES_PASSWORD;
const sequelize = new Sequelize('postgres://' + postgresUser + ':' + postgresPass + '@db:5432/' + postgresUser)
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = {
    User: sequelize.define('user', {
        // attributes
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING
        },
        github: {
            type: Sequelize.STRING
        },
        website: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
    }, {}),

    Experience: sequelize.define('experience', {
        // attributes
        startDate: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        endDate: {
            type: Sequelize.DATEONLY
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        company: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING
        },
        tags: {
            type: Sequelize.ARRAY(Sequelize.TEXT)
        },
    }, {})
}

sequelize.sync({ alter: true }).then(() => {
    console.log('Models synced successfully.');
})
.catch(err => {
    console.error('Unable to sync models:', err);
});

