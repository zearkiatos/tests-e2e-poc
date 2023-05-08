import SitePage from "../pages/SitePage";
import SigninPage from "../pages/SigninPage";
import PostsPage from "../pages/PostsPage";
import PostEditorPage from "../pages/PostEditorPage";
import ScheduledPostPage from "../pages/ScheduledPostPage";
import { faker } from "@faker-js/faker";

describe("Escenario creación post programado", () => {
  const sitePage = new SitePage();
  const signinPage = new SigninPage();
  const postsPage = new PostsPage();
  const postEditorPage = new PostEditorPage();
  const scheduledPostPage = new ScheduledPostPage();
  const title = faker.lorem.sentence();
  const body = faker.lorem.paragraphs(2);

  it("Crear una nuevo post", () => {
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
      postEditorPage.ingresarTitulo(title);
      postEditorPage.ingresarCuerpo(body);
      postEditorPage.menuPublicar();
      scheduledPostPage.selectSchedule();
      scheduledPostPage.setTime();
      scheduledPostPage.schedule();
      cy.wait(3000);
      sitePage.irAPosts();

      // Then

      cy.get("[title='Scheduled']").should("exist");
    });
  });
});
