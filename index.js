const express = require('express')
const { getAllAuthors, getAllAuthorsWithNovelAndGenre } = require('./controllers/authors')
const getAllGenres = require('./controllers/genres')

const app = express()
app.get('/:id', getAllAuthors)
app.get('/:id', getAllGenres)
app.get('/', getAllAuthorsWithNovelAndGenre)

app.listen(1337, () => {
  console.log('Listening on port 1337...')
})
