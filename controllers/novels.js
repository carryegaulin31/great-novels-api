const models = require('../models')

const getAllNovels = async (request, response) => {
  const allNovels = await models.Novels.findAll()

  return allNovels
    ? response.send(allNovels)
    : response.sendStatus(404)
}

const getNovelsByFuzz = async (request, response) => {
  const { identifier } = request.params

  const novel = await models.Novels.findOne({
    where: {
      [models.Sequelize.Op.or]: [
        { id: identifier },
        { title: { [models.Sequelize.Op.like]: `%${identifier}%` } },
      ]
    },
    include: [{ model: models.Authors }, { model: models.Genres }]
  })

  return novel
    ? response.send(novel)
    : response.sendStatus(404)
}

module.exports = { getAllNovels, getNovelsByFuzz }
