const models = require('../models')

const getAllAuthors = async (request, response) => {
  const allAuthors = await models.Authors.findAll({
    attributes: ['id', 'nameFirst', 'nameLast']
  })


  return allAuthors
    ? response.send(allAuthors)
    : response.sendStatus(404)
}

const getAuthorByFuzz = async (request, response) => {
  const { identifier } = request.params

  const authorByFuzz = await models.Authors.findAll({
    attributes: ['nameFirst', 'nameLast'],
    where: {
      [models.Sequelize.Op.or]: [
        { id: identifier },
        { nameLast: { [models.Sequelize.Op.like]: `%${identifier}%` } },
      ]
    },
    include: [{
      model: models.Novels,
      attributes: ['Title']
    }]
  })

  return authorByFuzz
    ? response.send(authorByFuzz)
    : response.sendStatus(404)
}

module.exports = { getAllAuthors, getAuthorByFuzz }
