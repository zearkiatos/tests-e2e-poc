import SitePage from "../../pages/SitePage";
import SigninPage from "../../pages/SigninPage";
import PostsPage from "../../pages/PostsPage";
import PostEditorPage from "../../pages/PostEditorPage";
import ScheduledPostPage from "../../pages/ScheduledPostPage";
import { getRandomPost } from "../../../mock/post";

describe("Escenario creación post programado", () => {
  const sitePage = new SitePage();
  const signinPage = new SigninPage();
  const postsPage = new PostsPage();
  const postEditorPage = new PostEditorPage();
  const scheduledPostPage = new ScheduledPostPage();

  beforeEach(function () {});

  it("Crear un nuevo scheduled post con HTML", () => {
    cy.fixture("login-data.json").then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);
      const post = getRandomPost();

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      signinPage.ingresarPassword(this.user.contraseña);
      signinPage.hacerClicEnIniciarSesion();
      sitePage.irAPosts();
      sitePage.goToScheduledPost();
      postsPage.nuevoPost();
      postEditorPage.ingresarTitulo(post.title);
      scheduledPostPage.selectBodyEditor();
      scheduledPostPage.clickOnAddFeatureButton();

      cy.wait(3000);

      // Then
    });
  });
});
