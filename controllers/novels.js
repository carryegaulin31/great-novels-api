const models = require('../models')

const getAllNovels = async (request, response) => {
  const { id } = request.params

  const novels = await models.Novels.findAll({
    where: { id }
  })

  return novels
    ? response.send(novels)
    : response.sendStatus('Sorry cannot find Novels')
}

module.exports = getAllNovels