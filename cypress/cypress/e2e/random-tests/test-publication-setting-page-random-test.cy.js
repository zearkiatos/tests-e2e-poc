import SitePage from "../../pages/SitePage";
import SigninPage from "../../pages/SigninPage";
import SettingPage from "../../pages/SettingPage";
import { faker } from "@faker-js/faker";

describe("Escenario publication settings con data aleatoria", () => {
  const sitePage = new SitePage();
  const signinPage = new SigninPage();
  const settingPage = new SettingPage();

  beforeEach(function () {});

  it("Al modificar descripción con cadena de caracteres mayor de 100 debe devolver error al guardar", () => {
    cy.fixture("login-data.json").then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);
      const title = faker.lorem.word();
      const tooLongDescription = faker.lorem.paragraph(10);
      const expectedMessage = "Description is too long";

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      signinPage.ingresarPassword(this.user.contraseña);
      signinPage.hacerClicEnIniciarSesion();
      sitePage.irAPosts();
      settingPage.goToGeneralSetting();
      cy.wait(3000);
      settingPage.titleAndDescriptionClick();
      settingPage.addNewTitle(title);
      settingPage.addNewDescription(tooLongDescription);
      settingPage.save();
      cy.wait(3000);

      // Then
      cy.contains(expectedMessage).should("exist");
    });
  });

  it("Agregar idioma de publicación de forma aleatoria", () => {
    cy.fixture("login-data.json").then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);
      const language = faker.address.countryCode()

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      signinPage.ingresarPassword(this.user.contraseña);
      signinPage.hacerClicEnIniciarSesion();
      cy.wait(3000);
      sitePage.irAPosts();
      settingPage.goToGeneralSetting();
      cy.wait(3000);
      settingPage.publicationLanguageClick();
      settingPage.addNewLanguage(language);
      settingPage.save();
      cy.wait(3000);

      // Then
      cy.get(".gh-input").should("have.value", language);
    });
  });

  it("Agregar red social con data aleatoria", () => {
    cy.fixture("login-data.json").then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);
      const facebookUser = faker.internet.userName();

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      signinPage.ingresarPassword(this.user.contraseña);
      signinPage.hacerClicEnIniciarSesion();
      cy.wait(3000);
      sitePage.irAPosts();
      settingPage.goToGeneralSetting();
      cy.wait(3000);
      settingPage.publicationLanguageClick();
      settingPage.addNewFacebookAccount(facebookUser);
      settingPage.save();
      cy.wait(3000);

      // Then
      cy.get(".gh-input").should("have.value", facebookUser);
    });
  });
});
