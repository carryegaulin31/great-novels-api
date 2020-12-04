const authors = (connection, Sequelize) => {
  return connection.define('authors', {
    id: {type: Sequelize.INTEGER, auto_increment: true, primaryKey: true },
    nameFirst: {type: Sequelize.STRING},
    nameLast: {type: Sequelize.STRING}
  }, { paranoid: true })
}

module.exports = authors
