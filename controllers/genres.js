const models = require('../models')

const getAllGenres = async (request, response) => {
  const { id } = request.params

  const allGenres = await models.Genres.findAll({
    where: { id }
  })

  return allGenres
    ? response.send(allGenres)
    : response.sendStatus('Genre not found')
}

module.exports = { getAllGenres }
