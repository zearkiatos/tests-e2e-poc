import SitePage from "../../pages/SitePage";
import SigninPage from "../../pages/SigninPage";
import DesignPage from "../../pages/DesignPage";
import { MenuClient } from "../../../clientApi/menuClient";

describe("Escenario design options con data pseudo aleatoria", () => {
  const sitePage = new SitePage();
  const signinPage = new SigninPage();
  const designPage = new DesignPage();
  const menuClient = new MenuClient();
  it("Agregar nueva opción de menú secundario con data pseudo aleatoria", () => {
    cy.fixture("login-data.json").then(function (user) {
      menuClient.getMenus().then(function (body) {
        const data = body[0];
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
        designPage.setSecondaryMenuOption(data.name);
        designPage.setSecondaryMenuUrl(data.link);
        designPage.save();
        cy.wait(3000);

        // Then
        cy.get(".ember-text-field.gh-input.ember-view")
          .its("length")
          .should("be.eq", 14);
      });
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
      designPage.delete();
      designPage.save();
      cy.wait(3000);

      // Then
      cy.get(".ember-text-field.gh-input.ember-view")
        .its("length")
        .should("be.eq", 12);
    });
  });
});
