const models = require('../models')

const getAllNovels = async (request, response) => {
  const allNovels = await models.Novels.findAll()

  return allNovels
    ? response.send(allNovels)
    : response.sendStatus('Sorry cannot find Novels')
}

module.exports = { getAllNovels }