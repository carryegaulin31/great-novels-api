const express = require('express')
const { getAllAuthors, getAuthorWithNovelAndGenre } = require('./controllers/authors')
const { getAllGenres, getGenresByIds } = require('./controllers/genres')
const { getAllNovels, getNovelsById } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)
app.get('/authors/:id', getAuthorWithNovelAndGenre)
app.get('/genres', getAllGenres)
app.get('./genres/:id', getGenresByIds)
app.get('/novels', getAllNovels)
app.get('/novels/:id', getNovelsById)

app.listen(1337, () => {
  console.log('Listening on port 1337...')
})
