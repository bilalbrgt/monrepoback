const uuid = require("uuid/v4");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id: uuid(),
    titre: "voyage en italie",
    lieu: "italie",
    image: "toto",
    prix: 50,
    descriptions: " un jolie voyage avec covid19",
    created_at: now,
    updated_at: now
  }
];
