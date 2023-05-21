import { faker } from "@faker-js/faker";
import SitePage from "../../pages/SitePage";
import SigninPage from "../../pages/SigninPage";
import DesignPage from "../../pages/DesignPage";

describe("Escenario design options con data aleatorio", () => {
  const sitePage = new SitePage();
  const signinPage = new SigninPage();
  const designPage = new DesignPage();
  it("Agregar nueva opción de menú con data aleatoria", () => {
    cy.fixture("login-data.json").then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      signinPage.ingresarPassword(this.user.contraseña);
      signinPage.hacerClicEnIniciarSesion();
      sitePage.irAPosts();
      designPage.goToDesignLink();
      cy.wait(3000);
      designPage.setNewMenuOption(faker.company.name());
      designPage.setNewMenuUrl(faker.internet.url());
      designPage.save();
      cy.wait(3000);

      // Then
      cy.get(".ember-text-field.gh-input.ember-view")
        .its("length")
        .should("be.eq", 14);
    });
  });

  it("Eliminar opción del menú generado con data aleatorio", () => {
    cy.fixture("login-data.json").then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      signinPage.ingresarPassword(this.user.contraseña);
      signinPage.hacerClicEnIniciarSesion();
      sitePage.irAPosts();
      designPage.goToDesignLink();
      cy.wait(3000);
      designPage.deleteSecondaryMenu();
      designPage.save();
      cy.wait(3000);

      // Then
      cy.get(".ember-text-field.gh-input.ember-view")
        .its("length")
        .should("be.eq", 12);
    });
  });
  
});
