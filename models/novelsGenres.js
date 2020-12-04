const novelsGenres = (connection, Sequelize) => {
  return connection.define('novelsGenres', {
    genreId: { type: Sequelize.INTEGER },
    novelId: { type: Sequelize.INTEGER }
  }, { paranoid: true })
}

module.exports = novelsGenres

