const axios = require('axios');

const MOCKAROO_API_URL = "https://my.api.mockaroo.com/tag_longer_name.json?key=0a3aea40";
const MOCKAROO_API_URL_LONGER_DESCRIPTION = "https://my.api.mockaroo.com/tag_longer_description.json?key=0a3aea40";
const MOCKAROO_API_URL_TAG_VALID = "https://my.api.mockaroo.com/tag_valid.json?key=0a3aea40";
const MOCKAROO_API_URL_TAG_INVALIDCOLOR = "https://my.api.mockaroo.com/tag_invalid_color.json?key=0a3aea40";
const config = {
  headers: {
    "Content-Type": "application/json"
  }
};
class TagClient {

  async getTagsInvalidColor() {
    const response = await axios.get(MOCKAROO_API_URL_TAG_INVALIDCOLOR, config);
    return response.data;
  }

  async getValidTags() {
    const response = await axios.get(MOCKAROO_API_URL_TAG_VALID, config);
    return response.data;
    
  }



  async getTags() {
    const response = await axios.get(MOCKAROO_API_URL, config);
    return response.data;
  }


  async getTagsLongerDescription() {
    const response = await axios.get(MOCKAROO_API_URL_LONGER_DESCRIPTION, config);
    return response.data;
  }
}

module.exports = {
  TagClient
};
