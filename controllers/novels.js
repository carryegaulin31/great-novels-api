const models = require('../models')

const getAllNovels = async (request, response) => {
  
  const allNovels = await models.Novels.findAll()

  return allNovels
    ? response.send(allNovels)
    : response.sendStatus(404)
}

const getNovelsByFuzz = async (request, response) => {
  const { title } = request.params
  const novelByFuzz = await models.Novels.findOne({
    where: {
      title: { [models.Op.like]: `%${title}%` }
    },
    include: [{
      model: models.Authors,
    }, {
      model: models.Genres
    }]
  })

  return novelByFuzz
    ? response.send(novelByFuzz)
    : response.sendStatus(404)
}

module.exports = { getAllNovels, getNovelsByFuzz }
