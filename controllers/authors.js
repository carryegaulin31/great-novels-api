const models = require('../models')

const getAllAuthors = async (request, response) => {
  const allAuthors = await models.Authors.findAll()

  return allAuthors
    ? response.send(allAuthors)
    : response.sendStatus(404)
}

const getAuthorByFuzz = async (request, response) => {
  const { identifier } = request.params

  const authorByFuzz = await models.Authors.findOne({
    where: {
      [models.Sequelize.Op.or]: [
        { id: identifier },
        { nameLast: { [models.Sequelize.Op.like]: `%${identifier}%` } },
      ]
    },
    include: [{
      model: models.Novels,
      include: [{ model: models.Genres }]
    }]
  })

  return authorByFuzz
    ? response.send(authorByFuzz)
    : response.sendStatus(404)
}

module.exports = { getAllAuthors, getAuthorByFuzz }
