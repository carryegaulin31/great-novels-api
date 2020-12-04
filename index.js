const express = require('express')
const { getAllAuthors } = require('./controllers/authors')

const app = express()

app.get('/', getAllAuthors)

app.listen(1337, () => {
  console.log('Listening on port 1337...')
})
