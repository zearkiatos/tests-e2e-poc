const timezones = require("./data/Timezones.json");
const { getRandomInt } = require("../utils/helper");

const getRandomTimezone = () => {
  const rand = getRandomInt(0, 66);

  return timezones[rand];
};

module.exports = { getRandomTimezone };
