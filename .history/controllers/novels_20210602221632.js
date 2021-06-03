const models = require('../models')

const getAllNovels = async (request, response) => {
  const allNovels = await models.Novels.findAll({
    attribu
  })

  return allNovels
    ? response.send(allNovels)
    : response.sendStatus(404)
}

const getNovelsByFuzz = async (request, response) => {
  const { identifier } = request.params

  const novel = await models.Novels.findAll({
    attributes: ['Title'],
    where: {
      [models.Sequelize.Op.or]: [
        { id: identifier },
        { title: { [models.Sequelize.Op.like]: `%${identifier}%` } },
      ]
    },
    include: [{
      model: models.Authors,
      attributes: ['nameFirst', 'nameLast']
    }, {
      model: models.Genres,
      attributes: ['name'],
      through: { attributes: [] }
    }]
  })

  return novel
    ? response.send(novel)
    : response.sendStatus(404)
}

module.exports = { getAllNovels, getNovelsByFuzz }
