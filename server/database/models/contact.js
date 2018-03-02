const Sequelize = require('sequelize')
const db = require('../db')
const Contact = db.define('contact', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	phone: {
		type: Sequelize.STRING,
		defaultValue: 'No phone number stored.'
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
	}
})

module.exports = Contact
