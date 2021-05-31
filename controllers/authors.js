const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.Authors.findAll()

  return response.send(authors)
}

const getAuthorByFuzz = async (request, response) => {
  const { id } = request.params

  const authorByFuzz = await models.Authors.findOne({
    where: {
      [models.Sequelize.Op.or]: [
        { id },
        { nameLast: { [models.Sequelize.Op.like]: `%${id}%` } },
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