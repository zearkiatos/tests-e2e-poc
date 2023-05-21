import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import MemberPage from '../../pages/MemberPage'

const { faker } = require('@faker-js/faker');

describe('Agregar miembros con un correo de formato inválido', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const memberPage = new MemberPage()
  const memberName = faker.name.firstName()
  const memberEmail = faker.lorem.sentence()
  const memberNote = faker.lorem.paragraph()
  const memberLabel = faker.lorem.word()

  beforeEach(function() {
  })

  it('Agregar miembros con un correo de formato inválido', () => {    
      cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()

      sitePage.irAMembers()

      memberPage.nuevoMiembro()

      memberPage.ingresarNombre(memberName)
      memberPage.ingresarEmail(memberEmail)
      memberPage.ingresarLabel(memberLabel)
      memberPage.ingresarNota(memberNote)
      memberPage.guardarMiembro()

      //Then
      cy.contains('Invalid Email.').should('exist')
    });     
  })
})