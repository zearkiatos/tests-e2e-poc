import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import MemberPage from '../../pages/MemberPage'

const { faker } = require('@faker-js/faker');

describe('Agregar un nuevo miembro con todos los campos opcionales y obligatorios', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const memberPage = new MemberPage()
  const memberName = faker.name.firstName()
  const memberEmail = faker.internet.email()
  const memberNote = faker.lorem.paragraph()
  const memberLabel = faker.lorem.word()

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

  it('Agregar un nuevo miembro con todos los campos opcionales y obligatorios', () => {    
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

    //Then
    memberPage.guardarMiembro()

    });     
  })
})