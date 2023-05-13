import SigninPage from '../pages/SigninPage'


const { faker } = require('@faker-js/faker');


describe('Escenario iniciar sesión y ver sitio', () => {
  const signinPage = new SigninPage()
  const scenario="test-view-site";

  beforeEach(function() {
    
  })

  it('Ingresar al sistema correctamente y ver sitio', () => {

    const  testCase="Ingreso-Correcto";
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);
      
    });

    cy.wait(2000);
    cy.screenshot(scenario+'/'+'1-'+testCase+'-Step-visit-site', {overwrite:true});


    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      cy.wait(2000);
      cy.screenshot(scenario+'/'+'2-'+testCase+'-Step-ingreso-correo', {overwrite:true});
      signinPage.ingresarPassword(this.user.contraseña)
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'3-'+testCase+'-Step-ingreso-password', {overwrite:true});
      signinPage.hacerClicEnIniciarSesion()
      cy.wait(1000);

      cy.screenshot(scenario+'/'+'4-'+testCase+'-Step-click-inicio-sesion', {overwrite:true});
      

      // Then
      
      cy.get('a[href="#/site/"]').should('be.visible')
      cy.get('iframe[id="site-frame"]').should('be.visible')
      cy.url().should('include', '/site')

      cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-asert', {overwrite:true});
      
    }); 
  });

  it('Intentar ingresar al sistema con credenciales erradas para ver el sitio', () => {

    const  testCase="Ingreso-incorrecto";
    
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);
      
    });

    cy.wait(2000);
    cy.screenshot(scenario+'/'+'6-'+testCase+'-step-visitar-sitio', {overwrite:true});

    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // When
      
      signinPage.ingresarCorreoElectronico(faker.internet.email())
      cy.wait(2000);
      cy.screenshot(scenario+'/'+'7-'+testCase+'-step-ingresar-correo', {overwrite:true});
      signinPage.ingresarPassword(faker.internet.password())
      cy.wait(2000);
      cy.screenshot(scenario+'/'+'8-'+testCase+'-step-ingresar-password', {overwrite:true});
      signinPage.hacerClicEnIniciarSesion()
      cy.wait(2000);
      cy.screenshot(scenario+'/'+'9-'+testCase+'-step-iniciar-sesion', {overwrite:true});

      // Then
      cy.contains('There is no user with that email address.').should('exist')
      cy.wait(2000);
      cy.screenshot(scenario+'/'+'10-'+testCase+'-step-assert', {overwrite:true});
    
    }); 
  });

  it('Intentar ingresar al sistema sin credenciales para ver el sitio', () => {

    const  testCase="Ingreso-sin-credenciales";

    cy.fixture('login-data.json').then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);
      
    });

    cy.wait(2000);
    cy.screenshot(scenario+'/'+'11-'+testCase+'-step-visitar-sitio', {overwrite:true});

    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // When
   
      signinPage.hacerClicEnIniciarSesion()
      cy.wait(2000);
      cy.screenshot(scenario+'/'+'12-'+testCase+'-step-iniciar-sesion', {overwrite:true});

      // Then
      cy.contains('Please fill out the form to sign in.').should('exist')
      cy.wait(2000);
      cy.screenshot(scenario+'/'+'13-'+testCase+'-step-assert', {overwrite:true});
    
    }); 
  });

})