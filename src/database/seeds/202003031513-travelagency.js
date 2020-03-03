const uuid = require("uuid/v4");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id: uuid(),
    name: "bilal",
    email: "toto@",
    Numero: "02",
    created_at: now,
    updated_at: now
  }
];
