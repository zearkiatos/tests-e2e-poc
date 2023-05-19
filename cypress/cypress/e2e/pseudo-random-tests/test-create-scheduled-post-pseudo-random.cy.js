import SitePage from "../../pages/SitePage";
import SigninPage from "../../pages/SigninPage";
import PostsPage from "../../pages/PostsPage";
import PostEditorPage from "../../pages/PostEditorPage";
import ScheduledPostPage from "../../pages/ScheduledPostPage";
import { PostClient } from "../../../clientApi/postClient";
import { SiteClient } from "../../../clientApi/siteClient";

describe("Escenario creación post programado con data pseudo aleatoria", () => {
  const sitePage = new SitePage();
  const signinPage = new SigninPage();
  const postsPage = new PostsPage();
  const postEditorPage = new PostEditorPage();
  const scheduledPostPage = new ScheduledPostPage();
  const postClient = new PostClient();
  const siteClient = new SiteClient();

  beforeEach(function () {});

  it("Crear una nuevo scheduled post con markdown", () => {
    cy.fixture("login-data.json").then(function (user) {
      postClient.getPosts().then(function (body) {
        const data = body[0];
        this.user = user;

        // Given
        cy.visit(this.user.urlLogin);

        // When
        signinPage.ingresarCorreoElectronico(this.user.usuario);
        signinPage.ingresarPassword(this.user.contraseña);
        signinPage.hacerClicEnIniciarSesion();
        cy.wait(3000);
        sitePage.irAPosts();
        sitePage.goToScheduledPost();
        postsPage.nuevoPost();
        postEditorPage.ingresarTitulo(data.title);
        cy.wait(3000);
        scheduledPostPage.selectBodyEditor();
        scheduledPostPage.clickOnAddFeatureButton();
        scheduledPostPage.selectMarkdownOption();
        scheduledPostPage.typeOnMarkdownEditor(`# ${data.description}`);
        postEditorPage.menuPublicar();
        scheduledPostPage.selectSchedule();
        scheduledPostPage.setTime();
        scheduledPostPage.schedule();
        cy.wait(3000);
        sitePage.irAPosts();

        // Then
        cy.wait(3000);
        cy.get("[title='Scheduled']").should("exist");
        cy.contains(data.title).should("exist");
      });
    });
  });

  it("Crear una nuevo scheduled post con bookmark", () => {
    cy.fixture("login-data.json").then(function (user) {
      postClient.getPosts().then(function (body) {
        const data = body[0];
        this.user = user;

        // Given
        cy.visit(this.user.urlLogin);

        // When
        signinPage.ingresarCorreoElectronico(this.user.usuario);
        signinPage.ingresarPassword(this.user.contraseña);
        signinPage.hacerClicEnIniciarSesion();
        cy.wait(3000);
        sitePage.irAPosts();
        sitePage.goToScheduledPost();
        postsPage.nuevoPost();
        postEditorPage.ingresarTitulo(data.title);
        cy.wait(3000);
        scheduledPostPage.selectBodyEditor();
        scheduledPostPage.clickOnAddFeatureButton();
        scheduledPostPage.selectBookmarkOption();
        scheduledPostPage.typeOnBookmark(data.url);
        cy.wait(3000);
        postEditorPage.menuPublicar();
        scheduledPostPage.selectSchedule();
        scheduledPostPage.setTime();
        scheduledPostPage.schedule();
        cy.wait(3000);
        sitePage.irAPosts();

        // Then
        cy.wait(3000);
        cy.get("[title='Scheduled']").should("exist");
        cy.contains(data.title).should("exist");
      });
    });
  });

  it("Modificar el titulo vacio y body con caso pseudo aleatorio", () => {
    cy.fixture("login-data.json").then(function (user) {
      siteClient.getSites().then(function (body) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      signinPage.ingresarPassword(this.user.contraseña);
      signinPage.hacerClicEnIniciarSesion();
      sitePage.irAPosts();
      settingPage.goToGeneralSetting();
      cy.wait(3000);
      settingPage.titleAndDescriptionClick();
      settingPage.addNewTitle(' ');
      settingPage.addNewDescription(body.description);
      settingPage.save();
      cy.wait(3000);

      // Then
      cy.get('.gh-nav-menu-details-blog').contains.should(' ')
    });
  });
});
});
