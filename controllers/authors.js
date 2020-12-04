const models = require('../models')

const getAllAuthors = async (request, response) => {

  const allAuthors = await models.Authors.findAll({
    include: [{ model: models.Novels && models.Genres }] // can you do that??? &&
  })

  return allAuthors
    ? response.send(allAuthors)
    : response.sendStatus('Authors not found')
}

module.exports = { getAllAuthors}