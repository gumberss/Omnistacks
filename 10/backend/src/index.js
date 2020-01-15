const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const { username, password } = require('./config')

const app = express()

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0-sriih.mongodb.net/week10?retryWrites=true&w=majority`, {
useNewUrlParser: true,
useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

app.listen(3333, err => err || "I'm up")