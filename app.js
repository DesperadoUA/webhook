'use strict'
const express = require('express')
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
	const arrey = ['7882680']
	console.log(req.body)
	const defoltReq = {
		responses: [
			{
				type: 'randomText',
				messages: ['Hi', 'Hello']
			}
		]
	}
	const customReq = {
		responses: [
			{
				type: 'randomText',
				messages: ['Hi!!!', 'Hello!!!']
			}
		]
	}
	const data = arrey.includes(req.body.userId) ? customReq : defoltReq
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
