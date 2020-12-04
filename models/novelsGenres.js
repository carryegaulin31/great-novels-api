const novelsGenres = (connection, Sequelize, Genres, Novels) => {
  return connection.define('novelsGenres', {
    genreId: { type: Sequelize.INTEGER },
    novelId: { type: Sequelize.INTEGER }
  }, { paranoid: true })
}

module.exports = novelsGenres

