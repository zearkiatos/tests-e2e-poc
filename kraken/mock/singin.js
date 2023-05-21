const accounts = require("./data/signin-data.json");
const accountsRandom = require("./data/login-data.json");

const getSigninValidAccount = () => {

  return accounts[0];
};

const getRandomAccount = () => {
    const rand = parseInt((Math.random() * 1000).toFixed(0), 10);
  
    return accountsRandom[rand];
};

module.exports = { getSigninValidAccount, getRandomAccount };

