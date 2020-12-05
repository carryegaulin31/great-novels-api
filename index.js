const express = require('express')
const { getAllAuthors, getAuthorWithNovelAndGenre } = require('./controllers/authors')
const { getAllGenres, getGenresWithNovelAndAuthor } = require('./controllers/genres')
const { getAllNovels, getNovelWithAuthorAndGenre } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)
app.get('/authors/:id', getAuthorWithNovelAndGenre)
app.get('/genres', getAllGenres)
app.get('/genres/:id', getGenresWithNovelAndAuthor)
app.get('/novels', getAllNovels)
app.get('/novels/:id', getNovelWithAuthorAndGenre)

app.listen(1337, () => {
  console.log('Listening on port 1337...')
})
