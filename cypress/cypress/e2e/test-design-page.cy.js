import SitePage from "../pages/SitePage";
import SigninPage from "../pages/SigninPage";
import DesignPage from "../pages/DesignPage";

describe("Escenario design options", () => {
  const sitePage = new SitePage();
  const signinPage = new SigninPage();
  const designPage = new DesignPage();
  const scenario = "test-design-option";

  beforeEach(function () {});

  it("Agregar nueva opción de menú", () => {
    const testCase = "add-new-menu-option";
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
      designPage.goToDesignLink();
      cy.screenshot(`${scenario}/5-${testCase}-step-go-to-design-setting`, {
        overwrite: true
      });
      cy.wait(3000);
      designPage.setNewMenuOption("Google");
      cy.screenshot(
        `${scenario}/6-${testCase}-step-type-new-menu-option-name`,
        { overwrite: true }
      );
      designPage.setNewMenuUrl("https://www.google.com/");
      cy.screenshot(`${scenario}/7-${testCase}-step-type-new-menu-option-url`, {
        overwrite: true
      });
      designPage.save();
      cy.screenshot(`${scenario}/8-${testCase}-step-save-new-menu`, {
        overwrite: true
      });
      cy.wait(3000);

      // Then
      cy.get(".ember-text-field.gh-input.ember-view")
        .its("length")
        .should("be.eq", 14);
      cy.screenshot(`${scenario}/9-${testCase}-step-check-new-menu-option`, {
        overwrite: true
      });
    });
  });

  it("Eliminar opción del menú", () => {
    const testCase = "delete-menu-option";
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
      designPage.goToDesignLink();
      cy.screenshot(`${scenario}/5-${testCase}-step-go-to-design-setting`, {
        overwrite: true
      });
      cy.wait(3000);
      designPage.delete();
      cy.screenshot(`${scenario}/6-${testCase}-step-delete-menu-option`, {
        overwrite: true
      });
      designPage.save();
      cy.screenshot(`${scenario}/7-${testCase}-save-menu-option-deleted`, {
        overwrite: true
      });
      cy.wait(3000);

      // Then
      cy.get(".ember-text-field.gh-input.ember-view")
        .its("length")
        .should("be.eq", 12);
      cy.screenshot(
        `${scenario}/8-${testCase}-step-check-menu-option-deleted`,
        { overwrite: true }
      );
    });
  });
});
