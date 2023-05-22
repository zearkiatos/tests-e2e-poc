const members = require("./data/members_data.json");
const members_numbers = require("./data/members_only_numbers_data.json");

const getRandomMember = () => {
  const rand = parseInt((Math.random() * 1000).toFixed(0), 10);

  return members[rand];
};

const getRandomMemberNumber = () => {
  const rand = parseInt((Math.random() * 500).toFixed(0), 10);

  return members_numbers[rand];
};


module.exports = { getRandomMember, getRandomMemberNumber };