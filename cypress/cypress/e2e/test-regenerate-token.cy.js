import SitePage from '../pages/SitePage'
import SigninPage from '../pages/SigninPage'
import ProfileEditorPage from '../pages/ProfileEditorPage';
Cypress.on('uncaught:exception', (err, runnable) => false);

const { faker } = require('@faker-js/faker');

describe("Regenerate Token", () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const profileEditorPage = new ProfileEditorPage()
  const oldToken=''


  it('Can regenerate token', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()

      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()
      this.oldToken = profileEditorPage.personalToken().invoke('val');
      profileEditorPage.regenerateBtn();
      profileEditorPage.regenerateTokenBtn();

      // Then
      cy.contains('p', 'Personal Token was successfully regenerated');

    });

  });

  it('Should have new token', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()

      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()
      const newToken = profileEditorPage.personalToken().invoke('val');

      // Then
      expect(this.oldToken).not.to.equal(newToken);


    });
  });
})
