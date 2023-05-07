import SigninPage from '../pages/SigninPage'


const { faker } = require('@faker-js/faker');


describe('Escenario iniciar sesión y ver sitio', () => {
  const signinPage = new SigninPage()

  beforeEach(function() {
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);
    });

  })

  it('Ingresar al sistema correctamente y ver sitio', () => {
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()

      // Then
      
      cy.get('a[href="#/site/"]').should('be.visible')
      cy.get('iframe[id="site-frame"]').should('be.visible')
      cy.url().should('include', '/site')
    }); 
  });

  it('Intentar ingresar al sistema con credenciales erradas para ver el sitio', () => {
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // When
      
      signinPage.ingresarCorreoElectronico(faker.internet.email())
      signinPage.ingresarPassword(faker.internet.password())
      signinPage.hacerClicEnIniciarSesion()

      // Then
      cy.contains('There is no user with that email address.').should('exist')
    
    }); 
  });

  it('Intentar ingresar al sistema sin credenciales para ver el sitio', () => {
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // When
   
      signinPage.hacerClicEnIniciarSesion()

      // Then
      cy.contains('Please fill out the form to sign in.').should('exist')
    
    }); 
  });

})