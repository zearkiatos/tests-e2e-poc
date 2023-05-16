

import SitePage from '../pages/SitePage'
import SigninPage from '../pages/SigninPage'
Cypress.on('uncaught:exception', (err, runnable) => false);

const { faker } = require('@faker-js/faker');

describe('Ghost Resources page', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const scenario = 'resource-content'

  it('Should display the main page title', () => {
    cy.fixture('login-data.json').then(function (user) {
      const testCase ='display-main-title'
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      //When
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
      sitePage.irAResource()
      cy.screenshot(`${scenario}/4-${testCase}-step-go-to-about`, {
        overwrite: true
      });

     
      // Then
      cy.origin('https://ghost.org/resources/', () => {
        cy.get('h1').should('have.text', 'Start here.');
        cy.screenshot(`${scenario}/5-${testCase}--step-assert`, {
          overwrite: true
        });
      })

    });


  });

  it('Displays at least footer', () => {
    cy.fixture('login-data.json').then(function (user) {
      const testCase ='display-footer'

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

       //When
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
       sitePage.irAResource()
       cy.screenshot(`${scenario}/4-${testCase}-step-go-to-resource`, {
         overwrite: true
       });

      // Then
      cy.origin('https://ghost.org/resources/', () => {
        cy.get('footer').should('exist');
        cy.screenshot(`${scenario}/5-${testCase}--step-assert`, {
          overwrite: true
        });
      })
    });

  });

  it('Should display the value of footer', () => {
    cy.fixture('login-data.json').then(function (user) {
      const testCase ='display-value-footer'
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

       //When
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
       sitePage.irAResource()
       cy.screenshot(`${scenario}/4-${testCase}-step-go-to-resource`, {
         overwrite: true
       });

      // Then
      cy.origin('https://ghost.org/resources/', () => {
        cy.get('footer').should('have.text', "\n    \n        \n            \n                    Product Updates\n    Help Center\n    @Ghost\n\n            \n            \n                Published with Ghost\n            \n        \n    \n");
        cy.screenshot(`${scenario}/5-${testCase}--step-assert`, {
          overwrite: true
        });
      })
    });
  });

  it('Should exist search input', () => {
    cy.fixture('login-data.json').then(function (user) {
      const testCase ='display-search-input'
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

        //When
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
        sitePage.irAResource()
        cy.screenshot(`${scenario}/4-${testCase}-step-go-to-resource`, {
          overwrite: true
        });

      // Then
      cy.origin('https://ghost.org/resources/', () => {
        cy.get('input[id="search-input"]').should('exist');
        cy.screenshot(`${scenario}/5-${testCase}-step-assert`, {
          overwrite: true
        });
      })
    });
  });
});