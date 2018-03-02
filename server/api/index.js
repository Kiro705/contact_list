const router = require('express').Router()

router.use('/contacts', require('./contacts'))

//Error handling if route requested is not found
router.use(( req, res, next ) => {
	const error = new Error('Not Found')
	error.status = 404

	next(error)
})

module.exports = router
