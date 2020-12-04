const models = require('../models')

const getAllAuthors = async (request, response) => {

  const allAuthors = await models.Authors.findall()

  return allAuthors
    ? response.send(allAuthors)
    : response.sendStatus('Sorry cannot find authors')
}

const getAllAuthorsWithNovelAndGenre = async (request, response) => {
  const { id } = request.params

  const allAuthorsWithNovelAndGenre = await models.Authors.findAll({
    where: { id },
    include: [{ model: models.Novels,  include: model: models.Genres }]

  return allAuthorsWithNovelAndGenre
  ? response.send(allAuthorsWithNovelAndGenre)
  : response.sendStatus('Authors not found')
}

module.exports = { getAllAuthors, getAllAuthorsWithNovelAndGenre }
