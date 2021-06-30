const express = require('express')
const { getAllAuthors, getAuthorByFuzz } = require('./controllers/authors')
const { getAllGenres, getGenresWithNovelAndAuthor } = require('./controllers/genres')
const { getAllNovels, getNovelsByFuzz } = require('./controllers/novels')

const app = express()

app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index')
})

app.get('/authors', getAllAuthors)
app.get('/authors/:identifier', getAuthorByFuzz)
app.get('/genres', getAllGenres)
app.get('/genres/:id', getGenresWithNovelAndAuthor)
app.get('/novels', getAllNovels)
app.get('/novels/:identifier', getNovelsByFuzz)

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Listening on port ${port}...`) // eslint-disable-line no-console
})
