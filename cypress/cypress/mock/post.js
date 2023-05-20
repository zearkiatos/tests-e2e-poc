const post = require("./data/post_data.json");
//const titles = require("./data/longer-title.json");

const getRandomPost = () => {
  const rand = parseInt((Math.random() * 1000).toFixed(0), 10);

  return post[rand];
};

// const getLongerTitle = () => {
  
//   return titles[0];
// };


module.exports = { getRandomPost };