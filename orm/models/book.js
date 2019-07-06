const Sequelize = require('sequelize')
const sqlCon = require('../connection')

const Book = sqlCon.define('book', {
    title: Sequelize.STRING,
    author: Sequelize.STRING
})

// Book.sync({ force: true })

module.exports = Book