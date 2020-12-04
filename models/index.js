const Sequelize = require('sequelize')
const AuthorsModel = require('./authors')
const GenresModel = require('./genres')
const NovelsModel = require('./novels') 
const NovelsGenresModel = require('./novelsGenres')
const connection = new Sequelize('greatBook', 'greatBook', 'bOoK', {
  host: 'localhost', dialect: 'mysql'
})

const authors = AuthorsModel(connection, Sequelize)
const genres = GenresModel(connection, Sequelize)
const novels = NovelsModel(connection, Sequelize)
const novelsGenres = NovelsGenresModel(connection, Sequelize, genres, novels)

