const router = require('express').Router()
const {Contact} = require('../database/models')

// GET api/contacts/
// Gets all contacts in database
router.get('/', (req, res, next) => {
	User.findAll()
		.then(users => res.json(users))
		.catch(next)
})

//Add contact (still needed)

//Edit contact (still needed)

// DELETE api/contacts/:id
// Deletes contact with matching id
router.delete('/:id', (req, res, next) => {
	const {id} = req.params
	User.destroy({
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
