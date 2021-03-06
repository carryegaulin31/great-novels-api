const NovelsGenres = (connection, Sequelize, Genres, Novels) => {
  return connection.define('NovelsGenres', {
    genreId: { type: Sequelize.INTEGER, references: { model: Genres, key: 'id' } },
    novelId: { type: Sequelize.INTEGER, references: { model: Novels, key: 'id' } },
  })
}

module.exports = NovelsGenres
