const genres = (connection, Sequelize) => {
  return conncection.define('genres', {
    id: {type: Sequelize.INTEGER, auto_increment: true, primaryKey: true},
    name: {type: Sequelize.STRING, allowNull: false },
  }, { paranoid: true })
}

module.exports = genres
