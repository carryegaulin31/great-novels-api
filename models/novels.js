const novels = (connection, Sequelize, Authors) => {
  return connection.define('novels', {
    id: { type: Sequelize.INTEGER, auto_increment: true, primaryKey: true },
    title: { type: Sequelize.STRING },
    authorId: { type: Sequelize.INTEGER }
  }, { paranoid: true })
}

module.exports = novels
