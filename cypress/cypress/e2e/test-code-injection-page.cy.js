import SitePage from "../pages/SitePage";
import SigninPage from "../pages/SigninPage";
import CodeInjectionPage from "../pages/CodeInjectionPage";

describe("Escenario code injection", () => {
  const sitePage = new SitePage();
  const signinPage = new SigninPage();
  const codeInjectionPage = new CodeInjectionPage();

  beforeEach(function () {});

  it("Inyectar codigo HTML en el footer de la página", () => {
    cy.fixture("login-data.json").then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      signinPage.ingresarPassword(this.user.contraseña);
      signinPage.hacerClicEnIniciarSesion();
      sitePage.irAPosts();
      codeInjectionPage.goToCodeInjection();
      codeInjectionPage.selectCodeEditor();
      codeInjectionPage.save();
      cy.wait(3000);
      // Then
      cy.contains("Hello World!").should("exist");
    });
  });

  it("Borrar html del footer", () => {
    cy.fixture("login-data.json").then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      signinPage.ingresarPassword(this.user.contraseña);
      signinPage.hacerClicEnIniciarSesion();
      sitePage.irAPosts();
      codeInjectionPage.goToCodeInjection();
      codeInjectionPage.selectCodeEditor();
      codeInjectionPage.save();
      cy.wait(3000);
      codeInjectionPage.deleteHtml();

      // Then
      cy.contains("Hello World!").should("not.exist");
    });
  });
});
