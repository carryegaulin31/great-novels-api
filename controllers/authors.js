const models = require('../models')

const getAllAuthors = async (request, response) => {
  const { id } = request.params

  const allAuthors = await models.Authors.findall({
    where: { id }
  })

  return allAuthors
    ? response.send(allAuthors)
    : response.sendStatus('Sorry cannot find authors')
}

const getAllAuthorsWithNovelAndGenre = async (request, response) => {
  const allAuthorsWithNovelAndGenre = await models.Authors.findAll({
    include: [{ model: models.Novels && models.Genres }] // can you do that??? &&
  })

  return allAuthorsWithNovelAndGenre
    ? response.send(allAuthorsWithNovelAndGenre)
    : response.sendStatus('Authors not found')
}

module.exports = { getAllAuthors, getAllAuthorsWithNovelAndGenre }
