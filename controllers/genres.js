const models = require('../models')

const getAllGenres = async (request, response) => {
  const allGenres = await models.Genres.findAll()

  return allGenres
    ? response.send(allGenres)
    : response.sendStatus('Genre not found')
}

const getGenresByIds = async (request, response) => {
  const { id } = request.params
  const genreById = await models.Genres.findOne({
    where: { id },
    include: [{
      model: models.Novels,
      include: [{ model: models.Authors }]
    }]
  })

  return genreById
    ? response.send(genreById)
    : response.sendStatus('Genres not found')
}

module.exports = { getAllGenres, getGenresByIds }
