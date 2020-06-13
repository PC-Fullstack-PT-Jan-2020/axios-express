const express = require('express')
const router = express.Router()
const conn = require('../db.js')

// conn.query(sql , [], (err, results, fields) => {})
router.get('/', (req, res, next) => {
  res.send('Hello World!')
})

router.get('/example', (req, res, next) => {
  res.json({ data: 'example GET!' })
})

router.delete('/example/:id', (req, res, next) => {
  console.log(req.params.id)
  res.json({ data: 'example DELETE!', paramId: req.params.id })
})

router.post('/example', (req, res, next) => {
  console.log(req.body)
  res.json({ data: 'example here!', body: req.body })
})

router.patch('/example/:id', (req, res, next) => {
  res.json({ data: 'example here!', body: req.body, paramId: req.params.id })
})

module.exports = router