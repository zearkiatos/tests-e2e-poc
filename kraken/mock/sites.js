const sites = require("./data/Sites.json");
const { getRandomInt } = require("../utils/helper");

const getRandomSite = () => {
  const rand = getRandomInt(0, 1000);

  return sites[rand];
};

module.exports = { getRandomSite };
