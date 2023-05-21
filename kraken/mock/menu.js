const menus = require("./data/Menus.json");
const { getRandomInt } = require("../utils/helper");

const getRandomMenus = () => {
  const rand = getRandomInt(0, 1000);

  return menus[rand];
};

module.exports = { getRandomMenus };
