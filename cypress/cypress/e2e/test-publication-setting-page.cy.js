import SitePage from "../pages/SitePage";
import SigninPage from "../pages/SigninPage";
import SettingPage from "../pages/SettingPage";
import { faker } from "@faker-js/faker";

describe("Escenario publication settings", () => {
  const sitePage = new SitePage();
  const signinPage = new SigninPage();
  const settingPage = new SettingPage();
  const title = faker.lorem.sentence();

  beforeEach(function () {});

  afterAll(() => {
    settingPage.addNewTitle('blog');
  });

  it("Modificar el titulo de la pagina de ghost", () => {
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
      settingPage.titleAndDescriptionClick();
      settingPage.addNewTitle(title);
      settingPage.save();
      cy.wait(3000);

      // Then
      cy.contains(title).should("exist");
    });
  });
});
