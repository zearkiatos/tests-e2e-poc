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

  beforeEach(function() {
    
    

  })

  it("Ir y mostrar listado de post publicados", () => {
    cy.fixture("login-data.json").then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      signinPage.ingresarPassword(this.user.contraseña);
      signinPage.hacerClicEnIniciarSesion();
      sitePage.irAPosts();
      publishedPostPage.goToPublishedPost();
      postsPage.nuevoPost();
      postEditorPage.ingresarTitulo(title);
      postEditorPage.ingresarCuerpo(body);
      publishedPostPage.openMenu();
      publishedPostPage.radioButton();
      postEditorPage.publicarPagina();
      cy.wait(3000);
      sitePage.irAPosts();

      // Then
      cy.contains(title).should("exist");
      cy.get('.gh-content-entry-title').its('length').should('be.gte', 1);
    });
  });
});
