'use strict'
const express = require('express')
const ARR_IDS = require('./store.js')
const bodyParser = require('body-parser')
const app = express().use(bodyParser.json())
const token = 'Trgky678bhh87Rdc93bhhiyQ'
app.get('/', (req, res) => {
	if (req.query.token !== token) {
		return res.sendStatus(401)
	}
	return res.end(req.query.challenge)
})
app.post('/', (req, res) => {
	if (req.query.token !== token) {
		return res.sendStatus(401)
	}
	const response = {
		responses: [
			{
				type: 'randomText',
				messages: ['Hi!!!', 'Hello!!!']
			}
		],
		attributes: {
			VIP: ARR_IDS.includes(parseInt(req.body.attributes.default_PLAYERID)) ? 'yes' : 'no'
		}
	}
	res.json(response)
})
app.get('/test', (req, res) => {
	const data = {
		responses: [
			{
				type: 'randomText',
				messages: ['Hi', 'Hello']
			}
		],
		attributes: {
			VIP: ARR_IDS
		}
	}
	res.json(data)
})
app.listen(3000, () => console.log('[ChatBot] Webhook is listening'))
