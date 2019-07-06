const Sequelize = require('sequelize')

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './migrations/db.sqlite'
  })

  //Uncomment this ONLY WHEN you want to rebuild your database
  // sequelize.sync({ force: true }).then(function(err) {
  //   console.log('The table was successfully created!');
  // }, function(err) {
  //   console.log('An error occurred while creating the table:', err);
  // });

module.exports = sequelize
