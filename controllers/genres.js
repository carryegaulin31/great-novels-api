const models = require('../models')

const getAllGenres = async (request, response) => {
  const allGenres = await models.Genres.findAll()

  return allGenres
    ? response.send(allGenres)
    : response.sendStatus(404)
}

const getGenresWithNovelAndAuthor = async (request, response) => {
  const { id } = request.params
  const genreWithNovelAndAuthor = await models.Genres.findOne({
    where: { id },
    include: [{
      model: models.Novels,
      include: [{ model: models.Authors }]
    }]
  })

  return genreWithNovelAndAuthor
    ? response.send(genreWithNovelAndAuthor)
    : response.sendStatus(404)
}

module.exports = { getAllGenres, getGenresWithNovelAndAuthor }
