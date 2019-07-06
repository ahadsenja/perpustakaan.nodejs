const Sequelize = require('sequelize')
const sqlCon = require('../connection')

const Member = sqlCon.define('member', {
    name: Sequelize.STRING,
    address: Sequelize.TEXT
})

// Member.sync({ force: true })

module.exports = Member