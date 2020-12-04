const models = require('../models')

const getAllNovels = async (request, response) => {
  const allNovels = await models.Novels.findAll()

  return allNovels
    ? response.send(allNovels)
    : response.sendStatus('Sorry cannot find Novels')
}

const getNovelsById = async (request, response) => {
  const { id } = request.params
  const novelById = await models.Novels.findOne({
    where: { id },
    include: [{
      model: models.Authors,
      include: [{ model: models.Genres }]
    }]
  })

  return novelById
    ? response.send(novelById)
    : response.sendStatus('Cannot find novel by id')
}

module.exports = { getAllNovels, getNovelsById }
