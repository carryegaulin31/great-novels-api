const models = require('../models')

const getAllNovels = async (request, response) => {
  const allNovels = await models.Novels.findAll()

  return allNovels
    ? response.send(allNovels)
    : response.sendStatus(404)
}

const getNovelWithAuthorAndGenre = async (request, response) => {
  const { id } = request.params
  const novelWithAuthorAndGenres = await models.Novels.findOne({
    where: { id },
    include: [{
      model: models.Authors,
    }, {
      model: models.Genres
    }]
  })

  return novelWithAuthorAndGenres
    ? response.send(novelWithAuthorAndGenres)
    : response.sendStatus(404)
}

module.exports = { getAllNovels, getNovelWithAuthorAndGenre }
