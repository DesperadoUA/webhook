'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express().use(bodyParser.json())
const token = 'VERIFICATION_TOKEN'
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
	console.log(req.body)
	const data = {
		responses: [
			{
				type: 'randomText',
				messages: ['Hi', 'Hello']
			}
		]
	}
	res.json(data)
})
app.get('/test', (req, res) => {
	const data = {
		responses: [
			{
				type: 'randomText',
				messages: ['Hi', 'Hello']
			}
		]
	}
	res.json(data)
})
app.listen(3000, () => console.log('[ChatBot] Webhook is listening'))
