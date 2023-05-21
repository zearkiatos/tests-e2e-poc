const axios = require("axios");

const MOCKAROO_API_URL = "https://my.api.mockaroo.com/menus.json?key=99232830";
const config = {
  headers: {
    "Content-Type": "application/json"
  }
};
class MenuClient {
  async getMenus() {
    const response = await axios.get(MOCKAROO_API_URL, config);

    return response.data;
  }
}

module.exports = {
  MenuClient
};
