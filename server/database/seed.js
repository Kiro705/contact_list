const db = require('../database')
const Contact = db.model('contact')
const Chance = require('chance')
const chance = new Chance()

//Contact seed
const contactName = [], contactEmail = [], contactPhone = []

for (var i = 0; i < 50; i++) {
	contactName.push(chance.name())
	contactEmail.push(chance.email())
	contactPhone.push(chance.phone())
}

const contactPromises = []
contactName.map(( val, idx ) => {
	contactPromises.push(Contact.create({
		name: val,
		email: contactEmail[idx],
		phone: contactPhone[idx],
	}))
})

Promise.all(contactPromises)
.then(() => {
		console.log('seed success!')
		process.exit(0)
	})
	.catch((err) => {
		console.error(err.parent)
		process.exit(1)
	})