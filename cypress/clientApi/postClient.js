const MOCKAROO_API_URL = "https://my.api.mockaroo.com/posts.json?key=99232830";
const headers = {
  "Content-Type": "application/json"
};
export class PostClient {
  getPosts() {
    cy.request({
      method: "GET",
      url: MOCKAROO_API_URL,
      headers
    }).then((response) => {
      cy.wrap(response.body).as("getPosts");
    });
    return cy.get("@getPosts");
  }
}
