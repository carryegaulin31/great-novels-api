const models = require('../models')

const getAllAuthors = async (request, response) => {
  const allAuthors = await models.Authors.findAll()

  return allAuthors
    ? response.send(allAuthors)
    : response.sendStatus('Sorry cannot find authors')
}

const getAuthorWithNovelAndGenre = async (request, response) => {
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
    : response.sendStatus('Authors not found')
}

module.exports = { getAllAuthors, getAuthorWithNovelAndGenre }
