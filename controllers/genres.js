const models = require('../models')

const getAllGenres = async (request, response) => {
  const { id } = request.params

  const genres = await models.Genres.findAll({
    where: { id },
  })

  return genres
    ? response.send(genres)
    : response.sendStatus('Genre not found')
}

module.exports = getAllGenres
