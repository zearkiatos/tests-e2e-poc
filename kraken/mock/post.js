const posts = require("./data/Posts.json");

const getRandomPost = () => {
  const rand = parseInt((Math.random() * 1000).toFixed(0), 10);

  return posts[rand];
};

module.exports = { getRandomPost };
