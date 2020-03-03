module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("destinations", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID
      },
      titre: {
        allowNull: false,
        type: Sequelize.CHAR(50)
      },
      lieu: {
        allowNull: false,
        type: Sequelize.CHAR(50)
      },
      image: {
        allowNull: false,
        type: Sequelize.CHAR(50)
      },
      prix: {
        allowNull: false,
        type: Sequelize.INTEGER(50)
      },
      descriptions: {
        allowNull: false,
        type: Sequelize.TEXT
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
