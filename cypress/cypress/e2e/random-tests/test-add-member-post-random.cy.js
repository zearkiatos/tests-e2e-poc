import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import MemberPage from '../../pages/MemberPage'

const { faker } = require('@faker-js/faker');

describe('Escenario para agregar miembros', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const memberPage = new MemberPage()
  const memberName = faker.lorem.sentence()
  const memberEmail = faker.internet.email()
  const memberNote = faker.lorem.sentence()

  beforeEach(function() {
  })

  it('Habilitar opción de miembros', () => {
    cy.fixture('login-data.json').then(function (user) {
    this.user = user;

    // Given
    cy.visit(this.user.urlLogin);

    // When
    signinPage.ingresarCorreoElectronico(this.user.usuario)

    signinPage.ingresarPassword(this.user.contraseña)

    signinPage.hacerClicEnIniciarSesion()

    sitePage.irALabs()
    memberPage.habilitarMiembros()

    memberPage.activarOpcionMiembros()

    memberPage.guardarConfigurarion()    
    });     
  })

  it('Agregar nuevo miembro', () => {    
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

    memberPage.ingresarNota(memberNote)

    //Then
    memberPage.guardarMiembro()

    });     
  })
})