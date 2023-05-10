

import SitePage from '../pages/SitePage'
import SigninPage from '../pages/SigninPage'
Cypress.on('uncaught:exception', (err, runnable) => false);

const { faker } = require('@faker-js/faker');

describe('Ghost Resources page', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()


  it('Should display the main page title', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()

      cy.get('.gh-nav-bottom').click()
      sitePage.irAResource()
     
      // Then
      cy.origin('https://ghost.org/resources/', () => {
        cy.get('h1').should('have.text', 'Start here.');
      })

    });


  });

  it('Displays at least footer', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()

      cy.get('.gh-nav-bottom').click()
      sitePage.irAResource()

      // Then
      // Then
      cy.origin('https://ghost.org/resources/', () => {
        cy.get('footer').should('exist');
      })
    });

  });

  it('Should display the value of footer', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()

      cy.get('.gh-nav-bottom').click()
      sitePage.irAResource()

      // Then
      cy.origin('https://ghost.org/resources/', () => {
        cy.get('footer').should('have.text', "\n    \n        \n            \n                    Product Updates\n    Help Center\n    @Ghost\n\n            \n            \n                Published with Ghost\n            \n        \n    \n");

      })
    });
  });

  it('Should exist serach input', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()

      cy.get('.gh-nav-bottom').click()
      sitePage.irAResource()

      // Then
      cy.origin('https://ghost.org/resources/', () => {
        cy.get('input[id="search-input"]').should('exist');

      })
    });
  });
});