import SigninPage from '../pages/SigninPage'


describe('Escenario ver sitio', () => {
  const signinPage = new SigninPage()

  beforeEach(function() {
    // Given
    cy.visit('http://localhost:2368/ghost/#/signin');
  })

  it('Ingresar al sistema correctamente', () => {
    // When
    signinPage.ingresarCorreoElectronico('teste2e@test.com')
    signinPage.ingresarPassword('Teste2e12345*')
    signinPage.hacerClicEnIniciarSesion()

    // Then
    
    cy.get('a[href="#/site/"]').should('be.visible')
    cy.url().should('include', '/site')
  })
})