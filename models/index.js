const Sequelize = require('sequelize')
const AuthorsModel = require('./authors')
const GenresModel = require('./genres')
const NovelsModel = require('./novels')
const NovelsGenresModel = require('./novelsGenres')
const authors = require('./authors')
const genres = require('./genres')
const novels = require('./novels')
const novelsGenres = require('./novelsGenres')
const connection = new Sequelize('greatBook', 'greatBook', 'bOoK', {
  host: 'localhost', dialect: 'mysql'
})

const Authors = AuthorsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const Novels = NovelsModel(connection, Sequelize)
const NovelsGenres = NovelsGenresModel(connection, Sequelize, genres, novels)

Authors.hasMany(Novels, { through: Novels })
Genres.belongsToMany(Novels, { through: NovelsGenres })
Novels.belongsToMany(Genres, { through: NovelsGenres })


module.exports = {
  authors,
  genres,
  novels,
  novelsGenres,
  Authors,
  Genres,
  Novels,
  NovelsGenres,
  AuthorsModel,
  GenresModel,
  NovelsModel,
  NovelsGenresModel
}