const router = require('express').Router()
const {Contact} = require('../database/models')

// GET api/contacts/
// Gets all contacts in database
router.get('/', (req, res, next) => {
	Contact.findAll()
		.then(contacts => res.json(contacts))
		.catch(next)
})

// POST api/contacts/
// Adds a new contact to the database
router.post('/', (req, res, next) => {
	Contact.create(req.body)
	.then((contact) => {
		if (contact) {
			res.status(201).json(contact)
		} else {
			res.sendStatus(404)
		}
	})
	.catch(next)
})

// PUT api/contacts/:id
// Edits a contact already in the database
router.put('/:id', (req, res, next) => {
	const id = +req.params.id
	Contact.update(req.body, {
		where: {
			id
		}
	})
	.then(() => {
		return Contact.findById(id)
	})
	.then((foundContact) => {
		if(foundContact) {
			res.status(200).json(foundContact)
		} else {
			res.sendStatus(404)
		}
	})
	.catch((err) => {
		res.status(500).json(err)
	})
})

// DELETE api/contacts/:id
// Deletes contact with matching id
router.delete('/:id', (req, res, next) => {
	const {id} = req.params
	Contact.destroy({
		where: {id}
	})
		.then((success) => {
			if (success) {
				res.sendStatus(204)
			} else {
				res.sendStatus(404)
			}
		})
		.catch((err) => {
			res.status(500).json(err)
		})
})

module.exports = router
