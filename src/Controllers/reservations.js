const { Formation } = require("..models/");

const formationsController = {
  recupererLesFormations: async () => {
    const formations = await Formation.findAll({
      order: [["nom", "ASC"]],
      attributes: ["id", "name", "email", "numero", "images"],
      raw: true
    });

    return formations;
  },
  recupererUneFormation: async id => {
    const formation = await Formation.findByPk(id, {
      attributes: ["id", "name", "name", "email", "images"],
      raw: true
    });

    return formation;
  }
};

module.exports = formationsController;
