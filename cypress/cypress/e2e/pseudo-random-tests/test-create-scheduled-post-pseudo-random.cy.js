import SitePage from "../../pages/SitePage";
import SigninPage from "../../pages/SigninPage";
import PostsPage from "../../pages/PostsPage";
import PostEditorPage from "../../pages/PostEditorPage";
import ScheduledPostPage from "../../pages/ScheduledPostPage";
// import { getPosts } from "../../../clientApi/postClient";
import { PostClient } from "../../../clientApi/postClient";

describe("Escenario creación post programado", () => {
  const sitePage = new SitePage();
  const signinPage = new SigninPage();
  const postsPage = new PostsPage();
  const postEditorPage = new PostEditorPage();
  const scheduledPostPage = new ScheduledPostPage();
  const postClient = new PostClient();

  beforeEach(function () {});

  it("Crear una nuevo scheduled post con markdown", () => {
    cy.fixture("login-data.json").then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      signinPage.ingresarPassword(this.user.contraseña);
      signinPage.hacerClicEnIniciarSesion();
      sitePage.irAPosts();
      sitePage.goToScheduledPost();
      postsPage.nuevoPost();
      // cy.request("GET", MOCKAROO_API_URL).its("body")
      postClient.getPosts().then(function (body) {
        cy.log(body);
        postEditorPage.ingresarTitulo(body[0].title);
      });
      cy.wait(5000);
      scheduledPostPage.clickOnAddFeatureButton();

      cy.wait(3000);

      // Then
    });
  });
});
