const path = require('path')
const express = require('express')
const app = express()
const db = require('./database')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 1990

const createApp = () => {
	// logging middleware
	app.use(volleyball)

	// body parsing middleware
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: false }))

	// auth and api routes
	app.use('/api', require('./api'))

	// static file-serving middleware
	app.use(express.static(path.join(__dirname, '..', 'public')))

	// sends index.html
	app.use('*', (req, res) => {
		res.sendFile(path.join(__dirname, '..', 'public/index.html'))
	})

	// error handling endware
	app.use((err, req, res, next) => {
		console.error(err)
		res.status(err.status || 500).send(err.message || 'Internal server error.')
	})
}

const startServer = () => {
	// starts server
	const server = app.listen(PORT, () => {
		console.log('server started')
		console.log(`http://localhost:${PORT}/`)
	})
}

//syncs database, `force: true` if you want to clear the database
const syncDb = () => db.sync({force: false})

//Running the functions to start the server
syncDb()
.then(createApp)
.then(startServer)

