import SitePage from "../../pages/SitePage";
import SigninPage from "../../pages/SigninPage";
import CodeInjectionPage from "../../pages/CodeInjectionPage";
import { PostClient } from "../../../clientApi/postClient";

describe("Escenario code injection con data pseudo aleatoria", () => {
  const sitePage = new SitePage();
  const signinPage = new SigninPage();
  const codeInjectionPage = new CodeInjectionPage();
  const postClient = new PostClient();

  it("Inyectar codigo HTML en el header de la página pseudo aleatoria", () => {
    cy.fixture("login-data.json").then(function (user) {
      postClient.getPosts().then(function (body) {
        this.user = user;
        const post = body[0];

        // Given
        cy.visit(this.user.urlLogin);

        // When
        signinPage.ingresarCorreoElectronico(this.user.usuario);
        signinPage.ingresarPassword(this.user.contraseña);
        signinPage.hacerClicEnIniciarSesion();
        cy.wait(5000);
        sitePage.irAPosts();
        codeInjectionPage.goToCodeInjection();
        codeInjectionPage.selectCodeEditorHeader(`<p>${post.title}</p>`);
        codeInjectionPage.save();
        cy.wait(3000);

        // Then
        cy.contains(post.title).should("exist");
      });
    });
  });

  it("Borrar html del footer con test pseudo aleatoria", () => {
    cy.fixture("login-data.json").then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      signinPage.ingresarPassword(this.user.contraseña);
      signinPage.hacerClicEnIniciarSesion();
      cy.wait(5000);
      sitePage.irAPosts();
      codeInjectionPage.goToCodeInjection();
      codeInjectionPage.selectCodeEditor();
      codeInjectionPage.save();
      cy.wait(3000);
      codeInjectionPage.deleteHtmlHeader();
    });
  });
});
