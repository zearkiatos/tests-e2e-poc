import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import MemberPage from '../../pages/MemberPage'

const { faker } = require('@faker-js/faker');

describe('Editar miembros con nombre de 500 caracteres', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const memberPage = new MemberPage()
  const memberName = faker.lorem.paragraph(14)

  beforeEach(function() {
  }) 

  it('Editar miembros con nombre de 500 caracteres', () => {    
      cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()

      sitePage.irAMembers()

      memberPage.seleccionarMiembro()

      memberPage.ingresarNombre(memberName)
      memberPage.guardarMiembro()
      
      //Then    
      cy.contains('Retry').should('exist')
    });     
  })
})