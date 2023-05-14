import SitePage from "../pages/SitePage";
import SigninPage from "../pages/SigninPage";
import SettingPage from "../pages/SettingPage";
import { faker } from "@faker-js/faker";

describe("Escenario publication settings", () => {
  const sitePage = new SitePage();
  const signinPage = new SigninPage();
  const settingPage = new SettingPage();
  const title = faker.lorem.sentence();
  const scenario = "test-publication-setting";
  const testCase = "edit-page-title";

  beforeEach(function () {});

  it("Modificar el titulo de la pagina de ghost", () => {
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
      settingPage.goToGeneralSetting();
      cy.screenshot(`${scenario}/5-${testCase}-step-go-to-general-setting`, { overwrite: true });
      cy.wait(3000);
      settingPage.titleAndDescriptionClick();
      cy.screenshot(`${scenario}/6-${testCase}-step-click-on-title-and-description`, { overwrite: true });
      settingPage.addNewTitle(title);
      cy.screenshot(`${scenario}/7-${testCase}-step-type-title`, { overwrite: true });
      settingPage.save();
      cy.screenshot(`${scenario}/8-${testCase}-step-save`, { overwrite: true });
      cy.wait(3000);

      // Then
      cy.contains(title).should("exist");
      cy.screenshot(`${scenario}/9-${testCase}-step-check-title-contain`, { overwrite: true });
    });
  });
});
