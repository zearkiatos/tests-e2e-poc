import SitePage from "../../pages/SitePage";
import SigninPage from "../../pages/SigninPage";
import CodeInjectionPage from "../../pages/CodeInjectionPage";
import { getRandomPost } from '../../../mock/post';

describe("Escenario code injection con data apriori", () => {
  const sitePage = new SitePage();
  const signinPage = new SigninPage();
  const codeInjectionPage = new CodeInjectionPage();
  let postApriori = null;

  before(function () {
    postApriori = getRandomPost();
  });

  it("Inyectar codigo HTML en el footer de la página apriori", () => {
    cy.fixture("login-data.json").then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      signinPage.ingresarPassword(this.user.contraseña);
      signinPage.hacerClicEnIniciarSesion();
      cy.wait(5000);
      sitePage.irAPosts();
      codeInjectionPage.goToCodeInjection();
      codeInjectionPage.selectCodeEditor(`<p>${postApriori.title}</p>`);
      codeInjectionPage.save();
      cy.wait(3000);

      // Then
      cy.contains(postApriori.title).should("exist");
    });
  });

  it("Borrar html del footer con test apriori", () => {
    cy.fixture("login-data.json").then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      signinPage.ingresarPassword(this.user.contraseña);
      signinPage.hacerClicEnIniciarSesion();
      cy.wait(5000);
      sitePage.irAPosts();
      codeInjectionPage.goToCodeInjection();
      codeInjectionPage.selectCodeEditor();
      codeInjectionPage.save();
      cy.wait(3000);
      codeInjectionPage.deleteHtml();

      // Then
      cy.contains(postApriori.title).should("not.exist");
    });
  });
});
