
import SitePage from '../pages/SitePage'
import SigninPage from '../pages/SigninPage'
Cypress.on('uncaught:exception', (err, runnable) => false);

const { faker } = require('@faker-js/faker');

describe('Display About content', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const scenario = 'about-content'

  it('displays the correct header', () => {
    cy.fixture('login-data.json').then(function (user) {
      const testCase ='display-about'
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
      sitePage.irAbouth()
      cy.screenshot(`${scenario}/4-${testCase}-step-go-to-about`, {
        overwrite: true
      });

      // Then
      cy.get('header').should("exist");
      cy.screenshot(`${scenario}/5-${testCase}--step-assert`, {
        overwrite: true
      });
    });
  });


  it('displays the correct footer', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()

      cy.get('.gh-nav-bottom').click()
      sitePage.irAbouth()

      // Then
      cy.get('footer').should("exist");
    });
  });

  it('displays the correct details', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()

      cy.get('.gh-nav-bottom').click()
      sitePage.irAbouth()

      // Then
      cy.get('.gh-env-details').should('contain.text', '\n            \n                Version 3.41.1\n                Environment development\n                Database sqlite3\n                Mail Direct\n            \n            \n                User Documentation\n                Get Help With Ghost\n            \n        ');
    });
  });

});
