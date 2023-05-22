import SitePage from "../../pages/SitePage";
import SigninPage from "../../pages/SigninPage";
import SettingPage from "../../pages/SettingPage";
import { getRandomTimezone } from "../../../mock/timezone";
import { getRandomSite } from "../../../mock/sites";

describe("Escenario publication settings con data apriori", () => {
  const sitePage = new SitePage();
  const signinPage = new SigninPage();
  const settingPage = new SettingPage();

  beforeEach(function () {});

  it("Cambiar la configuración general timezone con data apriori", () => {
    cy.fixture("login-data.json").then(function (user) {
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
      settingPage.siteTimezoneClick();
      const timezone = getRandomTimezone();
      settingPage.selectTimezone(timezone.value);
      cy.wait(3000);
      settingPage.save();
      cy.wait(3000);

      // Then
      cy.get("#timezone").should("have.value", timezone.value);
    });
  });

  it("Agregar metadata con data apriori", () => {
    cy.fixture("login-data.json").then(function (user) {
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
      settingPage.metaClick();
      const meta = getRandomSite();
      settingPage.addNewMetaTitle(meta.title);
      cy.wait(3000);
      settingPage.save();
      cy.wait(3000);

      // Then
      cy.get("#metaTitle").should("have.value", meta.title);
    });

    it("Rollback timezone", () => {
      cy.fixture("login-data.json").then(function (user) {
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
        settingPage.siteTimezoneClick();
        const timezone = getRandomTimezone();
        settingPage.selectTimezone("Etc/UTC");
        cy.wait(3000);
        settingPage.save();
        cy.wait(3000);

        // Then
        cy.get("#timezone").should("have.value", "Etc/UTC");
      });
    });
  });
});
