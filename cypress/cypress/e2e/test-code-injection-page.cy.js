import SitePage from "../pages/SitePage";
import SigninPage from "../pages/SigninPage";
import CodeInjectionPage from "../pages/CodeInjectionPage";

describe("Escenario code injection", () => {
  const sitePage = new SitePage();
  const signinPage = new SigninPage();
  const codeInjectionPage = new CodeInjectionPage();
  const scenario = "test-code-injection";

  beforeEach(function () {});

  it("Inyectar codigo HTML en el footer de la página", () => {
    const testCase = "inject-html-code";
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
      codeInjectionPage.goToCodeInjection();
      cy.screenshot(`${scenario}/5-${testCase}-step-go-to-code-injection`, { overwrite: true });
      codeInjectionPage.selectCodeEditor();
      cy.screenshot(`${scenario}/6-${testCase}-step-select-code-editor`, { overwrite: true });
      codeInjectionPage.save();
      cy.screenshot(`${scenario}/7-${testCase}-step-save-code-injecion`, { overwrite: true });
      cy.wait(3000);
      // Then
      cy.contains("Hello World!").should("exist");
      cy.screenshot(`${scenario}/8-${testCase}-step-check-new-content`, { overwrite: true });
    });
  });

  it("Borrar html del footer", () => {
    const testCase = "delete-html-from-injection-code";
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
      codeInjectionPage.goToCodeInjection();
      cy.screenshot(`${scenario}/5-${testCase}-step-go-to-code-injection`, { overwrite: true });
      codeInjectionPage.selectCodeEditor();
      cy.screenshot(`${scenario}/6-${testCase}-step-select-code-editor`, { overwrite: true });
      codeInjectionPage.save();
      cy.screenshot(`${scenario}/7-${testCase}-step-save-code-injecion`, { overwrite: true });
      cy.wait(3000);
      codeInjectionPage.deleteHtml();
      cy.screenshot(`${scenario}/8-${testCase}-step-delete-html`, { overwrite: true });

      // Then
      cy.contains("Hello World!").should("not.exist");
      cy.screenshot(`${scenario}/9-${testCase}-step-not-exist-content`, { overwrite: true });
    });
  });
});
