const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')
const cron = require('../utils/cron')

const app = express()

cron.start();

app.use(cors())


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app