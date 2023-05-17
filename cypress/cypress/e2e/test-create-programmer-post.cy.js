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
  const scenario = "test-create-programmer-post";
  const testCase = "create-new-scheduled-post";

  beforeEach(function () {});

  it("Crear una nuevo scheduled post", () => {
    cy.fixture("login-data.json").then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      cy.screenshot(`${scenario}/1-${testCase}-step-type-email`, { overwrite: true });
      signinPage.ingresarPassword(this.user.contraseña);
      cy.screenshot(`${scenario}/2-${testCase}-step-type-password`, { overwrite: true });
      signinPage.hacerClicEnIniciarSesion();
      cy.screenshot(`${scenario}/3-${testCase}-step-click-login`, { overwrite: true });
      sitePage.irAPosts();
      cy.screenshot(`${scenario}/4-${testCase}-step-go-to-post`, { overwrite: true });
      sitePage.goToScheduledPost();
      cy.screenshot(`${scenario}/5-${testCase}-step-go-to-scheduled-post`, { overwrite: true });
      postsPage.nuevoPost();
      cy.screenshot(`${scenario}/6-${testCase}-step-new-post`, { overwrite: true });
      postEditorPage.ingresarTitulo(title);
      cy.screenshot(`${scenario}/7-${testCase}-step-type-title`, { overwrite: true });
      postEditorPage.ingresarCuerpo(body);
      cy.screenshot(`${scenario}/8-${testCase}-step-type-body`, { overwrite: true });
      postEditorPage.menuPublicar();
      cy.screenshot(`${scenario}/9-${testCase}-step-publish-menu`, { overwrite: true });
      scheduledPostPage.selectSchedule();
      cy.screenshot(`${scenario}/10-${testCase}-step-select-schedule-option`, { overwrite: true });
      scheduledPostPage.setTime();
      cy.screenshot(`${scenario}/11-${testCase}-step-set-time`, { overwrite: true });
      scheduledPostPage.schedule();
      cy.screenshot(`${scenario}/12-${testCase}-step-schedule`, { overwrite: true });
      cy.wait(3000);
      sitePage.irAPosts();
      cy.screenshot(`${scenario}/13-${testCase}-step-go-to-post`, { overwrite: true });

      // Then

      cy.get("[title='Scheduled']").should("exist");
      cy.screenshot(`${scenario}/14-${testCase}-step-schedule-exist`, { overwrite: true });
    });
  });
});
