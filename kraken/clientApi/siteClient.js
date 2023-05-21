const axios = require('axios');

const MOCKAROO_API_URL = "https://my.api.mockaroo.com/sites.json?key=99232830";
const config = {
  headers: {
    "Content-Type": "application/json"
  }
};
class SiteClient {
  async getSites() {
    const response = await axios.get(MOCKAROO_API_URL, config);

    return response.data;
  }
}

module.exports = {
  SiteClient
};
