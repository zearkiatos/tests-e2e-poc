import SitePage from "../pages/SitePage";
import SigninPage from "../pages/SigninPage";
import DesignPage from "../pages/DesignPage";
import Urls from "../fixtures/urls.json";
import { faker } from "@faker-js/faker";

describe("Escenario design options", () => {
  const sitePage = new SitePage();
  const signinPage = new SigninPage();
  const designPage = new DesignPage();
  const title = faker.lorem.sentence();

  beforeEach(function () {});

  it("Agregar nueva opción de menú", () => {
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
      designPage.setNewMenuOption("Google");
      designPage.setNewMenuUrl("https://www.google.com/");
      designPage.save();
      cy.wait(3000);

      // Then
      cy.get('.ember-text-field.gh-input.ember-view').its('length').should('be.eq', 14);
    });
  });

  it("Eliminar opción del menú", () => {
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
      designPage.delete();
      designPage.save();
      cy.wait(3000);

      // Then
      cy.get('.ember-text-field.gh-input.ember-view').its('length').should('be.eq', 12);
    });
  });
});
