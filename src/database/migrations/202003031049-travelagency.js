module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("reservations", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID
      },
      name: {
        allowNull: false,
        type: Sequelize.CHAR(50)
      },
      email: {
        allowNull: false,
        type: Sequelize.CHAR(5)
      },
      Numero: {
        allowNull: false,
        type: Sequelize.INTEGER(50)
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Reservations");
  }
};
