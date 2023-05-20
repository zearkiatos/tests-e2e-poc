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
});
