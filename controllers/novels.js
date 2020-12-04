const models = require('../models')

const getAllNovels = async (request, response) => {
  const { id } = request.params

  const allNovels = await models.Novels.findAll({
    where: { id }
  })

  return allNovels
    ? response.send(allNovels)
    : response.sendStatus('Sorry cannot find Novels')
}

module.exports = { getAllNovels }