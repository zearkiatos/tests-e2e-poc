import SitePage from "../../pages/SitePage";
import SigninPage from "../../pages/SigninPage";
import PostsPage from "../../pages/PostsPage";
import PostEditorPage from "../../pages/PostEditorPage";
import ScheduledPostPage from "../../pages/ScheduledPostPage";
import { getRandomPost } from "../../../mock/post";

describe("Escenario creación post programado con contenido HTML", () => {
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
      cy.wait(3000);
      sitePage.irAPosts();
      sitePage.goToScheduledPost();
      postsPage.nuevoPost();
      postEditorPage.ingresarTitulo(post.title);
      cy.wait(3000);
      scheduledPostPage.selectBodyEditor();
      scheduledPostPage.clickOnAddFeatureButton();
      scheduledPostPage.selectHtmlOption();
      scheduledPostPage.typeOnHtmlEditor(`<p>${post.description}</p>`);
      postEditorPage.menuPublicar();
      scheduledPostPage.selectSchedule();
      cy.wait(3000);
      scheduledPostPage.setTime();
      scheduledPostPage.schedule();
      cy.wait(3000);
      sitePage.irAPosts();

      // Then
      cy.wait(5000);
      cy.get("[title='Scheduled']").should("exist");
      cy.contains(post.title).should("exist");
    });
  });

  it("Crear un nuevo scheduled con titulo y descripción con data apriori caso de error diferencia de menor a 2 minutos", () => {
    cy.fixture("login-data.json").then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);
      const post = getRandomPost();

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      signinPage.ingresarPassword(this.user.contraseña);
      signinPage.hacerClicEnIniciarSesion();
      cy.wait(3000);
      sitePage.irAPosts();
      sitePage.goToScheduledPost();
      postsPage.nuevoPost();
      postEditorPage.ingresarTitulo(post.title);
      postEditorPage.ingresarCuerpo(post.description);
      postEditorPage.menuPublicar();
      scheduledPostPage.selectSchedule();
      scheduledPostPage.setTimeWithCurrent();
      scheduledPostPage.schedule();
      cy.wait(3000);
      

      // Then

      cy.contains("Must be at least 2 mins in the future").should("exist");
    });
  });
});
