const travel = require("../seeds/202003031513-travelagency");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("destinations", travel);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("destinations", null, {});
  }
};
