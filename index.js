const express = require('express')
const { getAllAuthors, getAuthorByFuzz } = require('./controllers/authors')
const { getAllGenres, getGenresWithNovelAndAuthor } = require('./controllers/genres')
const { getAllNovels, getNovelsByFuzz } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)
app.get('/authors/:identifier', getAuthorByFuzz)
app.get('/genres', getAllGenres)
app.get('/genres/:id', getGenresWithNovelAndAuthor)
app.get('/novels', getAllNovels)
app.get('/novels/:identifier', getNovelsByFuzz)

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
