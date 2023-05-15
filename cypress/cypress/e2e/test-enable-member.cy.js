import SitePage from '../pages/SitePage'
import SigninPage from '../pages/SigninPage'
import MemberPage from '../pages/MemberPage'

describe('Escenario para habilitar la opción de agregar miembros', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const memberPage = new MemberPage()

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
});