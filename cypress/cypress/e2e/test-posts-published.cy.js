import SitePage from "../pages/SitePage";
import SigninPage from "../pages/SigninPage";
import PublishedPostPage from "../pages/publishedPostPage";
import PostsPage from "../pages/PostsPage";
import PostEditorPage from "../pages/PostEditorPage";
import { faker } from "@faker-js/faker";

describe("Escenario posts published", () => {
  const sitePage = new SitePage();
  const signinPage = new SigninPage();
  const publishedPostPage = new PublishedPostPage();
  const postsPage = new PostsPage();
  const postEditorPage = new PostEditorPage();
  const title = faker.lorem.sentence();
  const body = faker.lorem.paragraphs(2);
  const scenario = "test-post-published";
  const testCase = "show-post-published";

  beforeEach(function () {});

  it("Ir y mostrar listado de post publicados", () => {
    cy.fixture("login-data.json").then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      cy.screenshot(`${scenario}/1-${testCase}-step-type-email`, {
        overwrite: true
      });
      signinPage.ingresarPassword(this.user.contraseña);
      cy.screenshot(`${scenario}/2-${testCase}-step-type-password`, {
        overwrite: true
      });
      signinPage.hacerClicEnIniciarSesion();
      cy.screenshot(`${scenario}/3-${testCase}-step-click-login`, {
        overwrite: true
      });
      sitePage.irAPosts();
      cy.screenshot(`${scenario}/4-${testCase}-step-go-to-post`, {
        overwrite: true
      });
      publishedPostPage.goToPublishedPost();
      cy.screenshot(`${scenario}/5-${testCase}-step-go-to-published-post`, {
        overwrite: true
      });
      postsPage.nuevoPost();
      cy.screenshot(`${scenario}/6-${testCase}-step-new-post`, {
        overwrite: true
      });
      postEditorPage.ingresarTitulo(title);
      cy.screenshot(`${scenario}/7-${testCase}-step-type-title`, {
        overwrite: true
      });
      postEditorPage.ingresarCuerpo(body);
      cy.screenshot(`${scenario}/8-${testCase}-step-type-body`, {
        overwrite: true
      });
      publishedPostPage.openMenu();
      cy.screenshot(`${scenario}/9-${testCase}-step-open-menu`, {
        overwrite: true
      });
      publishedPostPage.radioButton();
      cy.screenshot(`${scenario}/10-${testCase}-step-select-radio-button`, {
        overwrite: true
      });
      postEditorPage.publicarPagina();
      cy.screenshot(`${scenario}/11-${testCase}-step-page-published`, {
        overwrite: true
      });
      cy.wait(3000);
      sitePage.irAPosts();
      cy.screenshot(`${scenario}/12-${testCase}-step-go-to-post`, {
        overwrite: true
      });

      // Then
      cy.contains(title).should("exist");
      cy.get(".gh-content-entry-title").its("length").should("be.gte", 1);
      cy.screenshot(`${scenario}/13-${testCase}-step-check-element-exist`, {
        overwrite: true
      });
    });
  });
});
