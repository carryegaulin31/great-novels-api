const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.Authors.findAll()

  return response.send(authors)
}

const getAuthorByFuzz = async (request, response) => {
  const { id } = request.params
  const authorWithNovelAndGenres = await models.Authors.findOne({
    where: { id },
    include: [{
      model: models.Novels,
      include: [{ model: models.Genres }]
    }]
  })

  return authorWithNovelAndGenres
    ? response.send(authorWithNovelAndGenres)
    : response.sendStatus(404)
}

module.exports = { getAllAuthors, getAuthorByFuzz }