const { Sequelize } = require("sequelize/types")
const genres = require("./genres")

const novelsGenres = (connection, Sequelize, genres, novels) => {
  return connection.define('novelsGenres', {
    genreId: { type: Sequelize.INTEGER },
    novelId: { type: Sequelize.INTEGER }
  }, { paranoid: true })

  module.exports = novelsGenres
  
}
