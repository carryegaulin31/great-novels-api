const models = require('../models')

const getAllGenres = async (request, response) => {
  const allGenres = await models.Genres.findAll({
    attributes: ['id', 'name']
  })

  return allGenres
    ? response.send(allGenres)
    : response.sendStatus(404)
}

const getGenresWithNovelAndAuthor = async (request, response) => {
  const { id } = request.params

  const genre = await models.Genres.findOne({
    attributes: []
    where: { id },
    include: [{
      model: models.Novels,
      include: [{ model: models.Authors }]
    }]
  })

  return genre
    ? response.send(genre)
    : response.sendStatus(404)
}
module.exports = { getAllGenres, getGenresWithNovelAndAuthor }
