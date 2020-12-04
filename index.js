const express = require('express')
const { getAllAuthors, getAllAuthorsWithNovelAndGenre } = require('./controllers/authors')
const { getAllGenres } = require('./controllers/genres')
const { getAllNovels } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)
app.get('/genres', getAllGenres)
app.get('/novels', getAllNovels)
app.get('/', getAllAuthorsWithNovelAndGenre)

app.listen(1337, () => {
  console.log('Listening on port 1337...')
})
