const tags = require("./data/tags_data.json");

const getRandomTag = () => {
  const rand = parseInt((Math.random() * 1000).toFixed(0), 10);

  return tags[rand];
};

module.exports = { getRandomTag };