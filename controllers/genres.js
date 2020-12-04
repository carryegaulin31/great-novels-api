const models = require('../models')

const getAllGenres = async (request, response) => {

  const allGenres = await models.Genres.findAll()

  return allGenres
    ? response.send(allGenres)
    : response.sendStatus('Genre not found')
}

module.exports = { getAllGenres }
