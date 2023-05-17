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
  const scenario = "test-regenerate-option";


  it('Can regenerate token', () => {
    const testCase= 'regenerate-token'
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      cy.screenshot(`${scenario}/1-${testCase}-step-type-email`, {
        overwrite: true
      });
      signinPage.ingresarPassword(this.user.contraseña)
      cy.screenshot(`${scenario}/2-${testCase}-step-type-password`, {
        overwrite: true
      });
      signinPage.hacerClicEnIniciarSesion()
      cy.screenshot(`${scenario}/3-${testCase}-step-click-login`, {
        overwrite: true
      });

      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()
      cy.screenshot(`${scenario}/5-${testCase}-step-go-to-profile`, {
        overwrite: true
      });
      this.oldToken = profileEditorPage.personalToken().invoke('val');
      cy.screenshot(`${scenario}/6-${testCase}-step-get-old-token`, {
        overwrite: true
      });
      profileEditorPage.regenerateBtn();
      cy.screenshot(`${scenario}/7-${testCase}-step-click-btn-regenerate-btn`, {
        overwrite: true
      });
      profileEditorPage.regenerateTokenBtn();
      cy.screenshot(`${scenario}/4-${testCase}-step-click-btn-regenerate-token`, {
        overwrite: true
      });

      // Then
      cy.contains('p', 'Personal Token was successfully regenerated');
      cy.screenshot(`${scenario}/4-${testCase}-step-succesfully-regenerated`, {
        overwrite: true
      });

    });

  });

  it('Should have new token', () => {
    cy.fixture('login-data.json').then(function (user) {
      const testCase= 'have-new-token'

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      cy.screenshot(`${scenario}/1-${testCase}-step-type-email`, {
        overwrite: true
      });

      signinPage.ingresarPassword(this.user.contraseña)
      cy.screenshot(`${scenario}/2-${testCase}-step-type-password`, {
        overwrite: true
      });

      signinPage.hacerClicEnIniciarSesion()
      cy.screenshot(`${scenario}/3-${testCase}-step-click-login`, {
        overwrite: true
      });

      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()
      cy.screenshot(`${scenario}/5-${testCase}-step-go-to-profile`, {
        overwrite: true
      });
      const newToken = profileEditorPage.personalToken().invoke('val');
      cy.screenshot(`${scenario}/6-${testCase}-step-get-new-token`, {
        overwrite: true
      });

      // Then
      expect(this.oldToken).not.to.equal(newToken);


    });
  });
})
