const Sequelize = require('sequelize')

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './migrations/db.sqlite'
  })

  sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });