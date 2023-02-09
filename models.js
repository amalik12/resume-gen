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
    }),

    Position: sequelize.define('position', {
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
            type: Sequelize.TEXT
        },
        tags: {
            type: Sequelize.ARRAY(Sequelize.TEXT)
        },
    }),

    Education: sequelize.define('education', {
        startDate: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        endDate: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        degree: {
            type: Sequelize.STRING,
            allowNull: false
        },
        major: {
            type: Sequelize.STRING,
            allowNull: false
        },
        school: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT
        },
        tags: {
            type: Sequelize.ARRAY(Sequelize.TEXT)
        },
    }),

    Project: sequelize.define('project', {
        startDate: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        endDate: {
            type: Sequelize.DATEONLY
        },
        hasEndDate: {
            type: Sequelize.BOOLEAN,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        website: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        tags: {
            type: Sequelize.ARRAY(Sequelize.TEXT)
        },
    })
}

sequelize.sync({ alter: true }).then(() => {
    console.log('Models synced successfully.');
})
.catch(err => {
    console.error('Unable to sync models:', err);
});

