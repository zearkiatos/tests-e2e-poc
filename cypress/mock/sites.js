const sites = require("./data/Sites.json");
const { getRandomInt } = require("../utils/functions");

const getRandomSite = () => {
  const rand = getRandomInt(0, 1000);

  return sites[rand];
};

module.exports = { getRandomSite };
